import { weatherTheme } from '../mui';
const cloudy = require('assets/img/Cloudy.png');
const rainy = require('assets/img/OccLightRain.png');
const sunny = require('assets/img/Sunny.png');

const getImageAndStyleFromWeather = (weather: string) => {
  switch (weather) {
    case 'Clouds':
      return {
        image: cloudy,
        style: {
          background:
            'linear-gradient(to bottom,' +
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
            'linear-gradient(to bottom,' +
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
            'linear-gradient(to bottom,' +
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
export default getImageAndStyleFromWeather;
