import { createAction } from '@reduxjs/toolkit';

// export const fetchOperationsRequest = createAction('operations/fetchOperationsRequest');
// export const fetchOperationsSuccess = createAction('operations/fetchOperationsSuccess');
// export const fetchOperationsError = createAction('operations/fetchOperationsError');

export const fetchByTypePeriodRequest = createAction('operations/fetchByTypePeriodRequest');
export const fetchByTypePeriodSuccess = createAction('operations/fetchByTypePeriodSuccess');
export const fetchByTypePeriodError = createAction('operations/fetchByTypePeriodError');

export const fetchByCategoryPeriodRequest = createAction('operations/fetchByCategoryPeriodRequest');
export const fetchByCategoryPeriodSuccess = createAction('operations/fetchByCategoryPeriodSuccess');
export const fetchByCategoryPeriodError = createAction('operations/fetchByCategoryPeriodError');

export const addOperationRequest = createAction('operations/addOperationRequest');
export const addOperationSuccess = createAction('operations/addOperationSuccess');
export const addOperationError = createAction('operations/addOperationError');

export const deleteOperationRequest = createAction('operations/deleteOperationRequest');
export const deleteOperationSuccess = createAction('operations/deleteOperationSuccess');
export const deleteOperationError = createAction('operations/deleteOperationError');

export const changeFilter = createAction('operations/changeFilter');