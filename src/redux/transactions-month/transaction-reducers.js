import * as actions from './transaction-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {  fetchAllTransactionsByMonth} from './transaction-operations';
// import { transactionsSelectors } from '.';



// const transactionsByMonth = createReducer([], {
//   [fetchAllTransactionsByMonth.fulfilled]: (_, { payload }) =>
//     payload.map(item => ({
//       ...item,
//       // date: `${item.day}.${item.month}.${item.year}`,
//     }))
// });

// console.log(transactionsByMonth)

const transactionsByMonth = createReducer(
  [],
  {[fetchAllTransactionsByMonth.fulfilled]: (_, { payload }) => payload,
  },
);

// console.log('transactionsByMonth',transactionsByMonth)


const initialDate = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };

  
  
  // console.log('initialDate' , selectedDate)
  
  const selectedDate = createReducer(initialDate, {
    [actions.selectedDate]: (_, { payload }) => payload,
  });
  
//   const totalExpense  =  createReducer( [], {[fetchAllTransactionsByMonth.fulfilled]: (_, { payload }) => payload,
// })

  const error = createReducer(null, {
    [fetchAllTransactionsByMonth.rejected]: (_state, action) => action.payload,
    [fetchAllTransactionsByMonth.pending]: () => null,
  })




  export default combineReducers({
    transactionsByMonth,
    selectedDate,
    // totalExpense,
    error
  });