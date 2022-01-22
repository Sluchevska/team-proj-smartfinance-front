import { createAction } from '@reduxjs/toolkit';

const setBalanceRequest = createAction('balance/setBalanceRequest');
const setBalanceSuccess = createAction('balance/setBalanceSuccess');
const setBalanceError = createAction('balance/setBalanceError');

const setBalanceSum = sum => {
  return {
    type: 'balance/set',
    payload: { sum },
  };
};

const balanceActions = {
  setBalanceRequest,
  setBalanceSuccess,
  setBalanceError,
  setBalanceSum,
};

export default balanceActions;
