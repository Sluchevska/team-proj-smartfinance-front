import { createAction } from '@reduxjs/toolkit';

const getUserBalanceRequest = createAction('balance/getUserBalanceRequest');
const getUserBalanceSuccess = createAction('balance/getUserBalanceSuccess');
const getUserBalanceError = createAction('balance/getUserBalanceError');

const setUserBalanceRequest = createAction('balance/setUserBalanceRequest');
const setUserBalanceSuccess = createAction('balance/setUserBalanceSuccess');
const setUserBalanceError = createAction('balance/setUserBalanceError');

const balanceActions = {
  getUserBalanceRequest,
  getUserBalanceSuccess,
  getUserBalanceError,
  setUserBalanceRequest,
  setUserBalanceSuccess,
  setUserBalanceError,
};

export default balanceActions;
