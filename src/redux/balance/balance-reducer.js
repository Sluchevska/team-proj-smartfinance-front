import { createReducer } from '@reduxjs/toolkit';
// import initState from './balance.initstate';
import actions from './balance-actions';
import {
  getCurrentUserSuccess,
  loginSuccess,
  logoutSuccess,
} from '../auth/auth-actions';

const initialBalance = { balance: null, isGetBalance: false };

const balance = createReducer(initialBalance, {
  [actions.getUserBalanceSuccess]: (_, { payload }) => ({
    ...initialBalance,
    ...payload,
  }),
  [actions.setUserBalanceSuccess]: (_, { payload }) => ({
    ...initialBalance,
    ...payload,
  }),
  [actions.getUserBalanceRequest]: (state, _) => {
    state.isGetBalance = true;
  },
  [actions.setUserBalanceRequest]: (state, _) => {
    state.isGetBalance = true;
  },

  [logoutSuccess]: (_, __) => initialBalance,
  // [actions.setUserBalanceError]: (_, { payload }) => {
  //   console.log('payload error', payload);
  // },

  // [loginSuccess]: (_, { payload }) => ({
  //   balance: payload.balance,
  // }),

  // [getCurrentUserSuccess]: (state, { payload }) => {
  //   return { ...state, balance: payload.balance };
  // },
});

// const balanceReducer = (state = initialBalance, { type, payload }) => {
//   switch (type) {
//     case 'balance/set':
//       return { initBalance: payload.sum };

//     default:
//       return state;
//   }
// };

export default balance;
