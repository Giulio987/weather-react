import { Box, Card, Typography } from '@mui/material';
import { CityWeather } from 'shared/models/weather';

interface Props {
  city: CityWeather;
}

const MeteoCard = ({ city }: Props) => {
  return (
    <Card
      sx={{
        p: 2,
        pr: 2.5,
        my: 2,
        borderRadius: '25px',
        ...city.mainWeather.style,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '370px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4">{city.name}</Typography>
        <Typography variant="subtitle1" sx={{ maxWidth: '100px' }}>
          {city.mainWeather.localeDate}
        </Typography>
        <Typography variant="subtitle2">
          {city.mainWeather.localTime}
        </Typography>
      </Box>
      <img src={city.mainWeather.image} alt={city.name} />
      <Typography variant={'h1'}>
        {city.mainWeather.temperature.toFixed() + '°'}
      </Typography>
    </Card>
  );
};

export default MeteoCard;
