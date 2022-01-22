//with Redux Toolkit
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'
import {fetchSummarySuccess} from './summary-action'

const operationsByMonth = createReducer([], {
    [fetchSummarySuccess]: (_, { payload }) => payload
    }
)

export default combineReducers({
    operationsByMonth
});

