import { createSlice } from '@reduxjs/toolkit';

export interface WeatherState {}

var initialState: WeatherState = {};

export const weatherSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {},
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
