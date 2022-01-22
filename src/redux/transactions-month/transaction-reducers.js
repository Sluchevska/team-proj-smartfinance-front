import * as actions from './transaction-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const transactionsByMonth = createReducer(
  [],
  {[actions.operationsSuccess]: (_, { payload }) => payload,
  },
);


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
  })




  export default combineReducers({
    transactionsByMonth,
    selectedDate,
    error
  });