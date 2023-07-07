import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../Services/cryptoApi';
import { cryptoNewsApi } from '../Services/cryptoNewsApi';

const customizedMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(cryptoNewsApi.middleware).concat(cryptoApi.middleware);

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: customizedMiddleware
});
