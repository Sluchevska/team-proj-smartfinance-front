//with Redux Toolkit
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'

import {
    addOperationSuccess,
    deleteOperationSuccess,
    fetchOperationSuccess,
    selectDate
} from './operations-action'

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

