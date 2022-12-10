import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/slices/counter';
import { openWeatherApi } from './services/openWeather';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [openWeatherApi.reducerPath]: openWeatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openWeatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
