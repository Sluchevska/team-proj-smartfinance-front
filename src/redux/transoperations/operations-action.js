//without Redux Toolkit
import { createAction } from '@reduxjs/toolkit';

export const fetchOperationRequest = createAction('operations/fetchOperationRequest');
export const fetchOperationSuccess = createAction('operations/fetchOperationSuccess');
export const fetchOperationError = createAction('operations/fetchOperationError');

export const addOperationRequest = createAction('operations/addOperationRequest');
export const addOperationSuccess = createAction('operations/addOperationSuccess');
export const addOperationError = createAction('operations/addOperationError');

export const deleteOperationRequest = createAction('operations/deleteOperationRequest');
export const deleteOperationSuccess = createAction('operations/deleteOperationSuccess');
export const deleteOperationError = createAction('operations/deleteOperationError');

export const resetError = createAction('transactions/resetError');
export const selectDate = createAction('transactions/selectDate');


    


