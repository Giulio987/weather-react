import { Typography } from '@mui/material';
import React from 'react';
import { CityWeather } from 'models/weather';

interface LeftCityMeteoProps {
  city: CityWeather;
}

const LeftCityMeteo = ({ city }: LeftCityMeteoProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 130,
        width: '140px',
        height: '280px',
        borderRadius: '0px 25px 25px 0px ',
        ...city.mainWeather.style,
        boxShadow: '5px 10px 20px rgba(0,0,0,0.17)',
      }}
    >
      <Typography variant="h1" ml={'10px'} mb={'33px'}>
        {city.mainWeather.temperature.toFixed() + '°'}
      </Typography>
      <img src={city.mainWeather.image} alt={city.name} />
    </div>
  );
};

export default LeftCityMeteo;
