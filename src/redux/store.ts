import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/slices/counter';
import { ricknmortyApi } from '@/redux/services/ricknmorty';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [ricknmortyApi.reducerPath]: ricknmortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ricknmortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
