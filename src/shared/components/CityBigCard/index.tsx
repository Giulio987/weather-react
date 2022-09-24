import { Card, Typography } from '@mui/material';
import { CityWeather } from 'shared/models/weather';
//@ts-ignore
import Tourin from './Tourin.jpg';
interface FirstCityMeteoProps {
  city: CityWeather;
}
const CityBigCard = ({ city }: FirstCityMeteoProps) => {
  return (
    <Card
      sx={{
        maxHeight: '100%',
        flex: 1,
        pt: 8,
        pl: '146px',
        minWidth: '470px',
        background: 'url(' + Tourin + ')',
        backgroundSize: '100% 100%',
        backgroundPosition: 'bottom right',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography variant={'h2'} sx={{ pb: 1 }}>
        {city.name}
      </Typography>
      <Typography variant={'body2'} fontWeight="400" sx={{ pb: 2 }}>
        {city.mainWeather.localeDate}
      </Typography>
      <Typography variant={'body2'} sx={{ fontWeight: '300' }}>
        {city.mainWeather.main === 'Clear' ? 'Sunny' : city.mainWeather.main}
      </Typography>
    </Card>
  );
};

export default CityBigCard;
