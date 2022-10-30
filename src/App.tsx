import DesktopWeather from 'pages/DesktopWeather';
import React, { useEffect, useMemo } from 'react';
import { useAppDispatch } from 'redux/store';
import { getWeather } from 'redux/thunks/weather';

const App = () => {
  const dispatch = useAppDispatch();

  const cities = useMemo(
    () => [
      {
        name: 'Turin',
        country: 'IT',
        id: 1,
        coord: { lat: 45.064, lon: 7.66 },
      },
      { name: 'London', country: 'GB', id: 2, coord: { lat: 51.5, lon: -0.1 } },
      {
        name: 'Rome',
        country: 'IT',
        id: 3,
        coord: {
          lat: 41.9,
          lon: 12.5,
        },
      },
    ],
    []
  );
  useEffect(() => {
    for (const city of cities) {
      dispatch(getWeather(city));
    }
  }, [dispatch, cities]);
  return <DesktopWeather />;
};

export default App;
