import { setCallState, setWeather } from 'redux/reducers/wheather';
import { AppDispatch } from 'redux/store';
import { CityWeather } from 'shared/models/weather';
import getImageAndStyleFromWeather from 'shared/modules/utilities';

const getWeather =
  (city: { name: string; country: string; id: number }) =>
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
      console.log(data);
      const additionalData = getImageAndStyleFromWeather(data.weather[0].main);
      //Formattazione data e ora
      const localeDate = new Date((data.sys.sunrise + data.timezone) * 1000)
        .toLocaleDateString('en-GB', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        })
        .replace(',', ' ')
        .split(' ');
      const localeDateFormatted =
        localeDate[0] + localeDate[1] + ', ' + localeDate[2];
      const month = localeDate[3];
      const localTime = new Date(
        (data.sys.sunrise + data.timezone) * 1000
      ).toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      //Creazione oggetto
      const cityWeather = new CityWeather(
        city.id,
        city.name,
        data.weather[0].main,
        data.weather[0].description,
        data.main.temp,
        localeDateFormatted,
        month,
        localTime,
        additionalData.image,
        additionalData.style
      );
      console.log(cityWeather);
      dispatch(setWeather(cityWeather));
      dispatch(setCallState({ isLoading: false, error: null }));
    } catch (err: any) {
      dispatch(setCallState({ isLoading: false, error: err.message }));
      throw new Error(err.message || 'Something went wrong');
    }
  };

export { getWeather };
