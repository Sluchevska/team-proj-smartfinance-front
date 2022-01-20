import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addOperationRequest,
  addOperationSuccess,
  addOperationError,
  deleteOperationRequest,
  deleteOperationSuccess,
  deleteOperationError,
  changeFilter,
  fetchByCategoryPeriodRequest,
  fetchByCategoryPeriodSuccess,
  fetchByCategoryPeriodError,
  fetchByTypePeriodRequest,
  fetchByTypePeriodSuccess,
  fetchByTypePeriodError
} from './operations-actions';

export const items = createReducer([], {
  // [fetchOperationsSuccess]: (_, { payload }) => payload,
  [fetchByTypePeriodSuccess]: (_, { payload }) => payload,
  [addOperationSuccess]: (state, { payload }) => [...state, payload],
  [deleteOperationSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

export const loading = createReducer(false, {
  [fetchByCategoryPeriodRequest]: () => true,
  [fetchByCategoryPeriodSuccess]: () => false,
  [fetchByCategoryPeriodError]: () => false,
  [fetchByTypePeriodRequest]: () => true,
  [fetchByTypePeriodSuccess]: () => false,
  [fetchByTypePeriodError]: () => false,
  [addOperationRequest]: () => true,
  [addOperationSuccess]: () => false,
  [addOperationError]: () => false,
  [deleteOperationRequest]: () => true,
  [deleteOperationSuccess]: () => false,
  [deleteOperationError]: () => false,
});

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const error = createReducer(null, {});

// export default combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });