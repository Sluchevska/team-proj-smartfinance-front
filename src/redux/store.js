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
// import { balanceReducer } from './balance';
import operationsReducer from './transactions-month/transaction-reducers'
import { summaryReducer } from './summary';
import {transOperationsReducer} from './transoperations'

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    //  balance: balanceReducer,
    operations: operationsReducer,
    transOperations: transOperationsReducer,
    summary: summaryReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);