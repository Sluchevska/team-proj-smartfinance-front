import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';

import operationsReducer from './transactions-month/transaction-reducers'

import { transactionsReducer } from './transaction';
// import { balanceReducer } from './balance';





const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'refreshToken'],
};

export const store = configureStore({
  reducer: {



    auth: persistReducer(authPersistConfig, authReducer),

    operations: operationsReducer,

    transactions: transactionsReducer,

    //  balance: balanceReducer,


  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({

      serializableCheck: false,

    }),
});

export const persistor = persistStore(store);