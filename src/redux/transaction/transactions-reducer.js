import * as actions from './transactions-actions';

import {
    fetchAddTransaction,
    fetchDeleteTransaction,
} from './transactions-operations';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
};

const selectedDate = createReducer(initialDate, {
    [actions.selectedDate]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {

    [fetchAddTransaction.pending]: () => true,
    [fetchAddTransaction.fulfilled]: () => false,
    [fetchAddTransaction.rejected]: () => false,

    [fetchDeleteTransaction.pending]: () => true,
    [fetchDeleteTransaction.fulfilled]: () => false,
    [fetchDeleteTransaction.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {


    [fetchAddTransaction.pending]: () => null,
    [fetchAddTransaction.rejected]: setError,

    [fetchDeleteTransaction.pending]: () => null,
    [fetchDeleteTransaction.rejected]: setError,

    [actions.resetError]: () => null,
});

export default combineReducers({
    selectedDate,
    isLoading,
    error,
});