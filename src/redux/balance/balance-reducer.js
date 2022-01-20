import { createReducer } from '@reduxjs/toolkit';
import initState from './balance.initstate';
import actions from './balance-actions';
import {
  getCurrentUserSuccess,
  loginSuccess,
  logoutSuccess,
} from '../auth/auth-actions';

const initialBalance = { initBalance: 0 };

// const balanceReducer = createReducer(initialBalance, {
//   [actions.setBalanceSuccess]: (state, { payload }) => {
//     return { ...state, balance: payload.updatedBalance };
//   },

//   [loginSuccess]: (_, { payload }) => ({
//     balance: payload.balance,
//   }),

//   [getCurrentUserSuccess]: (state, { payload }) => {
//     return { ...state, balance: payload.balance };
//   },

//   [logoutSuccess]: (_, __) => initialBalance,
// });

const balanceReducer = (state = initialBalance, { type, payload }) => {
  switch (type) {
    case 'balance/set':
      console.log(payload.sum);
      return { initBalance: payload.sum };

    default:
      return state;
  }
};

export default balanceReducer;
