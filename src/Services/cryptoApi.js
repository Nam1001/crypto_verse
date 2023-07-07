import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '1f6a9db988msha0faaf742b4e34ep1362f1jsna692f3c4e0d1',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';  /*to match the variable casing convention*/

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),

      getCryptoHistory: builder.query({
        query: ({ coinId, Time }) => createRequest(`coin/${coinId}/history?timeperiod=${Time}`),
      }), 
      getCryptoExchanges: builder.query({
        query: () => createRequest(`/exchange/-zdvbieRdZ/coins`),
      }), 
  }),
});

export const { useGetCryptoQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetCryptoExchangesQuery } = cryptoApi;
