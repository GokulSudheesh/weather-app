import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OPENWEATHERMAP_BASE_URL, OPENWEATHERMAP_API_KEY } from '@env';
import { OpenWeatherAPIResponse } from '@/interfaces/openWeatherResponse.interface';

export enum Units {
  metric = 'metric',
  imperial = 'imperial',
}

// Define a service using a base URL and expected endpoints
export const openWeatherApi = createApi({
  reducerPath: 'openWeatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: OPENWEATHERMAP_BASE_URL }),
  endpoints: (builder) => ({
    getWeather: builder.query<
      OpenWeatherAPIResponse,
      { lat: number; lon: number; units: Units }
    >({
      query: (request) => ({
        url: 'onecall',
        params: { ...request, appid: OPENWEATHERMAP_API_KEY },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherQuery } = openWeatherApi;
