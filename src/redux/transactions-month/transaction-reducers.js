import * as actions from './transaction-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {  fetchAllTransactionsByMonth} from './transaction-operations';



const transactionsByMonth = createReducer([], {
  [fetchAllTransactionsByMonth.fulfilled]: (_, { payload }) =>
    payload.map(item => ({
      ...item,
      date: `${item.day}.${item.month}.${item.year}`,
    }))
});

// const transactionsByMonth = createReducer(
//   [],
//   {[fetchAllTransactionsByMonth.fulfilled]: (_, { payload }) => payload.operations,
//   },
// );

// console.log('transactionsByMonth',transactionsByMonth)


const initialDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };
  
  // console.log('initialDate' , selectedDate)
  
  const selectedDate = createReducer(initialDate, {
    [actions.selectedDate]: (_, { payload }) => payload,
  });
  

  const error = createReducer(null, {
    [fetchAllTransactionsByMonth.rejected]: (_state, action) => action.payload,
    [fetchAllTransactionsByMonth.pending]: () => null,
  })




  export default combineReducers({
    transactionsByMonth,
    selectedDate,
    error
  });