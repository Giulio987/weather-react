import { setWeather } from 'redux/reducers/wheather';
import { AppDispatch } from 'redux/store';

const getWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    dispatch(setWeather(data));
  } catch (err: any) {
    throw new Error(err.message || 'Something went wrong');
  }
};

export { getWeather };
