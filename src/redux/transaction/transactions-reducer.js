import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//import * as actions from './transactions-actions';

import {
    addOperationSuccess,
    deleteOperationSuccess,
    fetchOperationSuccess,
    selectDate
} from './transactions-operations';

const initialDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
};

const selectedDate = createReducer(initialDate, {
    [selectDate]: (_, { payload }) => payload,
});

const operationsByDate = createReducer([], {
    [fetchOperationSuccess]:(_, {payload}) => payload,
    [addOperationSuccess]: (state, {payload}) => [payload, ...state],
    [deleteOperationSuccess]: (state, {payload}) =>
        state.filter(({_id}) => _id !== payload)
})

export default combineReducers({
    selectedDate,
    operationsByDate
});

// const isLoading = createReducer(false, {

//     [fetchAddTransaction.pending]: () => true,
//     [fetchAddTransaction.fulfilled]: () => false,
//     [fetchAddTransaction.rejected]: () => false,

// });

// const setError = (_, { payload }) => payload;

// const error = createReducer(null, {
//     [fetchAddTransaction.pending]: () => null,
//     [fetchAddTransaction.rejected]: setError,
//     [actions.resetError]: () => null,
// });