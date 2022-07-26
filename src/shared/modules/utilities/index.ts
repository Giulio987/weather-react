import { createSvgIcon } from '@mui/material';
import { weatherTheme } from '../mui';
const getImageAndStyleFromWeather = (weather: string) => {
  switch (weather) {
    case 'Clouds':
      return {
        image: 'assets/img/Cloudy.png',
        style: { ackground: '' },
      };
    case 'Rain':
      return {
        image: 'assets/img/occ-light-rain.png',
        style: { ackground: '' },
      };
    case 'Clear':
      return {
        image: 'assets/img/Sunny.png',
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
        image: 'assets/img/Sunny.png',
        style: { background: '' },
      };
  }
};
export default getImageAndStyleFromWeather;
