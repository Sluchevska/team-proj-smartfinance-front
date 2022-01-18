import { createAction } from '@reduxjs/toolkit';

const getBalance = createAction('balance/getBalance');
const setLoading = createAction('balance/setLoading');

const balanceActions = {
  getBalance,
  setLoading
};

export default balanceActions;