import { createAction } from '@reduxjs/toolkit';

export const resetError = createAction('transactions/resetError');
export const selectDate = createAction('transactions/selectDate');

export const fetchOperationRequest = createAction('operations/fetchOperationRequest');
export const fetchOperationSuccess = createAction('operations/fetchOperationSuccess');
export const fetchOperationError = createAction('operations/fetchOperationError');

export const addOperationRequest = createAction('transactions/addOperationRequest');
export const addOperationSuccess = createAction('transactions/addOperationSuccess');
export const addOperationError = createAction('transactions/addOperationError');

export const deleteOperationRequest = createAction('transactions/deleteOperationRequest');
export const deleteOperationSuccess = createAction('transactions/deleteOperationSuccess');
export const deleteOperationError = createAction('transactions/deleteOperationError');