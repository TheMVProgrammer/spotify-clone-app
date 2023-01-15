import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key', '2983f3cb21mshd4dbfbcb763706ap1907eejsn3c84c3a0f699');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;