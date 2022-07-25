import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WeatherState {
  isLoading: boolean;
  error: string | null;
  cities: any[];
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
    //TODO capire come sistemare al meglio redux
    setWeather: (state: WeatherState, action: PayloadAction<WeatherState>) => {
      if (action.payload.cit) {
        state.cities = [...state.cities, action.payload];
      }
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
