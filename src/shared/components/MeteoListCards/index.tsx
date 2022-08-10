import { List } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import MeteoCard from '../MeteoCard';

const MeteoListCards = () => {
  const { cities, error, isLoading } = useSelector(
    (state: RootState) => state.weather
  );
  return (
    <List disablePadding>
      {cities.map((city, i) => (
        <div key={city.name}>{i !== 0 && <MeteoCard city={city} />}</div>
      ))}
    </List>
  );
};

export default MeteoListCards;
