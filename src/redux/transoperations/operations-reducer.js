//with Redux Toolkit
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'

import {
    addOperationSuccess,
    deleteOperationSuccess,
    fetchOperationSuccess
} from './operations-action'

const operationsByDate = createReducer([], {
    [fetchOperationSuccess]:(_, {payload}) => payload,
    [addOperationSuccess]: (state, {payload}) => [payload, ...state],
    [deleteOperationSuccess]: (state, {payload}) =>
        state.filter(({_id}) => _id !== payload)
})

export default combineReducers({
    operationsByDate
});

