//with Redux Toolkit
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'

import {
    addOperationSuccess,
    deleteOperationSuccess,
    fetchOperationSuccess,
    changeFilter
} from './operations-action'

const operationsByDate = createReducer([], {
    [fetchOperationSuccess]:(_, {payload}) => payload,
    [addOperationSuccess]: (state, {payload}) => [payload, ...state],
    [deleteOperationSuccess]: (state, {payload}) =>
        state.filter(({id}) => id !== payload)
})

// const filter = createReducer('', {
//    [changeFilter]:(_, {payload}) => payload,
// })

// export default combineReducers({
//     items,
//     filter
// });

export default combineReducers({
    operationsByDate
});

