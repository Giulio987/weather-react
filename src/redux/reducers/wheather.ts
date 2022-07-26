import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityWeather } from 'shared/models/weather';

export interface WeatherState {
  isLoading: boolean;
  error: string | null;
  cities: CityWeather[];
}

var initialState: WeatherState = {
  isLoading: false,
  error: null,
  cities: [],
};

export const weatherSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setWeather: (state: WeatherState, action: PayloadAction<CityWeather>) => {
      if (action.payload) {
        state.cities = [...state.cities, action.payload];
      }
    },
    setCallState: (
      state: WeatherState,
      action: PayloadAction<{ isLoading: boolean; error: null | string }>
    ) => {
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
  },
});

export const { setWeather, setCallState } = weatherSlice.actions;

export default weatherSlice.reducer;
