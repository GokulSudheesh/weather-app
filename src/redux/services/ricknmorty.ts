import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RNM_API_BASE_URL } from '@env';
import { RicknMortyAPI } from '@/interfaces/rnmCharacter.interface';

// Define a service using a base URL and expected endpoints
export const ricknmortyApi = createApi({
  reducerPath: 'ricknmortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: RNM_API_BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<RicknMortyAPI, number>({
      query: (page) => `character?page=${page}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharactersQuery } = ricknmortyApi;
