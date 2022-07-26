import { setCallState, setWeather } from 'redux/reducers/wheather';
import { AppDispatch } from 'redux/store';
import { CityWeather } from 'shared/models/weather';
import getImageAndStyleFromWeather from 'shared/modules/utilities';

const getWeather =
  (city: { name: string; country: string }) =>
  async (dispatch: AppDispatch) => {
    dispatch(setCallState({ isLoading: true, error: null }));
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      const additionalData = getImageAndStyleFromWeather(data.weather[0].main);
      console.log(data);
      const cityWeather = new CityWeather(
        city.name,
        data.weather[0].main,
        data.weather[0].description,
        data.main.temp,
        additionalData.image,
        additionalData.style
      );
      dispatch(setWeather(cityWeather));
      dispatch(setCallState({ isLoading: false, error: null }));
    } catch (err: any) {
      dispatch(setCallState({ isLoading: false, error: err.message }));
      throw new Error(err.message || 'Something went wrong');
    }
  };

export { getWeather };
