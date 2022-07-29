import DesktopWeather from 'pages/DesktopWeather';
import React, { useEffect, useMemo } from 'react';
import { useAppDispatch } from 'redux/store';
import { getWeather } from 'redux/thunks/weather';

const App = () => {
  const dispatch = useAppDispatch();
  const MINUTE_MS = 60000;

  const cities = useMemo(
    () => [
      { name: 'Turin', country: 'IT', id: 1 },
      { name: 'London', country: 'GB', id: 2 },
      { name: 'Rome', country: 'IT', id: 3 },
    ],
    []
  );
  useEffect(() => {
    for (const city of cities) {
      dispatch(getWeather(city));
    }
    const interval = setInterval(() => {
      for (const city of cities) {
        dispatch(getWeather(city));
      }
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [dispatch, cities]);
  return <DesktopWeather />;
};

export default App;
