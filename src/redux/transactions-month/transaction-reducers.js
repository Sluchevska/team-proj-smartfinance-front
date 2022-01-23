import * as actions from './transaction-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const transactionsByMonth = createReducer([], {
  [actions.operationsSuccess]: (_, { payload }) => payload,
});

const initialDate = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

const selectedDate = createReducer(initialDate, {
  [actions.selectedDate]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [actions.operationsError]: (_state, action) => action.payload,
  [actions.operationsRequest]: () => null,
});

const category = createReducer('Продукты', {
  [actions.changeCategory]: (_, { payload }) => payload,
});

const type = createReducer('expenses', {
  [actions.changeType]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.operationsRequest]: () => true,
  [actions.operationsSuccess]: () => false,
  [actions.operationsError]: () => false,
});

export default combineReducers({
  transactionsByMonth,
  selectedDate,
  category,
  type,
  loading,
  error,
});
