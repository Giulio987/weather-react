import { CityWeather } from 'shared/models/weather';
import { weatherTheme } from '../mui';
const cloudy = require('assets/img/Cloudy.png');
const rainy = require('assets/img/OccLightRain.png');
const sunny = require('assets/img/Sunny.png');

const getImageAndStyleFromWeather = (weather: string, id: number) => {
  switch (weather) {
    case 'Clouds':
      return {
        image: cloudy,
        style: {
          background:
            (id === 1
              ? 'linear-gradient(to bottom,'
              : 'linear-gradient(to right,') +
            weatherTheme.palette.cloudy.main +
            ', ' +
            weatherTheme.palette.cloudy.light +
            ')',
        },
      };
    case 'Rain':
      return {
        image: rainy,
        style: {
          background:
            (id === 1
              ? 'linear-gradient(to bottom,'
              : 'linear-gradient(to right,') +
            weatherTheme.palette.rainy.main +
            ', ' +
            weatherTheme.palette.rainy.light +
            ')',
        },
      };
    case 'Clear':
      return {
        image: sunny,
        style: {
          background:
            (id === 1
              ? 'linear-gradient(to bottom,'
              : 'linear-gradient(to right,') +
            weatherTheme.palette.primary.main +
            ', ' +
            weatherTheme.palette.primary.light +
            ')',
        },
      };
    default:
      return {
        image: sunny,
        style: {
          background:
            'linear-gradient(to bottom,' +
            weatherTheme.palette.primary.main +
            ', ' +
            weatherTheme.palette.primary.light +
            ')',
        },
      };
  }
};

export const getHourlyFormat = (dt: number) => {
  const formattedHour =
    new Date(dt * 1000)
      .toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .split(' ')[0]
      .split(':')[0] +
    ' ' +
    new Date(dt * 1000)
      .toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .split(' ')[1];
  return formattedHour;
};

export const getArrayOfTabs = (cityWeather: CityWeather) => {
  if (cityWeather) {
    const dailyWeather = cityWeather.dailyWeather;
    //create an array with dailyWeather elements divided by 3
    const arrayOfTabs = [];
    for (let i = 0; i < dailyWeather.length; i += 3) {
      arrayOfTabs.push(dailyWeather.slice(i, i + 3));
    }
    return arrayOfTabs;
  } else return [];
};

export default getImageAndStyleFromWeather;
