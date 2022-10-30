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
    <List
      disablePadding
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {cities.map((city, i) => (
        <React.Fragment key={city.name}>
          {i !== 0 && <MeteoCard city={city} />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default MeteoListCards;
