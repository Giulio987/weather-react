import DesktopWeather from 'pages/DesktopWeather';
import React, { useEffect, useMemo } from 'react';
import { useAppDispatch } from 'redux/store';
import { getWeather } from 'redux/thunks/weather';

const App = () => {
  const dispatch = useAppDispatch();
  const cities = useMemo(
    () => [
      { name: 'Turin', country: 'IT' },
      { name: 'London', country: 'GB' },
      { name: 'Rome', country: 'IT' },
    ],
    []
  );
  useEffect(() => {
    try {
      for (const city of cities) {
        dispatch(getWeather(city));
      }
    } catch (e) {}
  }, [dispatch, cities]);
  return <DesktopWeather />;
};

export default App;
