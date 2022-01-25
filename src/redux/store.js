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
import reportsReducer from './reports/reports-reducers';
// import { transactionsReducer } from './transaction';
import { summaryReducer } from './summary';
import balance from './balance/balance-reducer';
import { transOperationsReducer } from './transoperations';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),

    reports: reportsReducer,

    transOperations: transOperationsReducer,
    // transactions: transactionsReducer,

    summary: summaryReducer,

    balance,
  },

  devTools: process.env.NODE_ENV !== 'production',

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
