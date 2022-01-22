import { createAction } from '@reduxjs/toolkit';
import balanceTypes from './balance-types';

const setBalanceRequest = createAction('balance/setBalanceRequest');
const setBalanceSuccess = createAction('balance/setBalanceSuccess');
const setBalanceError = createAction('balance/setBalanceError');

const setBalanceSum = sum => {
  return {
    type: balanceTypes.SET,
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
