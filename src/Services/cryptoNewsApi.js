import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiNewsHeaders ={
 
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': '1f6a9db988msha0faaf742b4e34ep1362f1jsna692f3c4e0d1',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            
}

const baseUrl ='https://bing-news-search1.p.rapidapi.com' /*to match the variable casing convention*/

const createRequest = (url) => ({ url, headers: cryptoApiNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoApiNews',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({category,count}) => createRequest(`/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
