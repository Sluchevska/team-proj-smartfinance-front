import { createReducer } from '@reduxjs/toolkit';
import initState from './balance.initstate';
import actions from './balance-actions';
import  {
  getCurrentUserSuccess,
  loginSuccess,
  logoutSuccess,
} from "../auth/auth-actions";

const balanceReducer = createReducer(initState, {
  [actions.setBalanceSuccess]: (state, { payload }) => {
  return { ...state, balance: payload.updatedBalance };
},

[loginSuccess]: (_, { payload }) => ({
  balance: payload.balance,
}),

[getCurrentUserSuccess]: (state, { payload }) => {
  return { ...state, balance: payload.balance};
},

[logoutSuccess]: (_, __) => initState,
});

export default balanceReducer;
