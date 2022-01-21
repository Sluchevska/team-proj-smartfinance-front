import axios from 'axios';
// import * as transactionsApi from '../../api/transactionsApi';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    addOperationRequest,
    addOperationSuccess,
    addOperationError,
    deleteOperationRequest,
    deleteOperationSuccess,
    deleteOperationError,
    fetchOperationRequest,
    fetchOperationSuccess,
    fetchOperationError
} from './transactions-actions.js'

export const fetchOperationExpenses = (year, month, day) => async dispatch => {
    // console.log("fetch запрос")
    dispatch(fetchOperationRequest());

    try {
        const { data } = await axios.get(`/api/operations/byday?year=${year}&month=${month}&day=${day}&type=expenses`);
        dispatch(fetchOperationSuccess(data.data.operations.expenses));
        // console.log("список операций расходы", data)
        } catch (error) {
            dispatch(fetchOperationError(error.message))
        }
}

export const fetchOperationIncome = (year, month, day) => async dispatch => {
    // console.log("fetch запрос")
    dispatch(fetchOperationRequest());

    try {
        const { data } = await axios.get(`/api/operations/byday?year=${year}&month=${month}&day=${day}&type=income`);
     dispatch(fetchOperationSuccess(data.data.operations.income));
        // console.log("список операций доходы", data)
        } catch (error) {
            dispatch(fetchOperationError(error.message))
        }
}

export const addOperation = ({ date, category, description, sum, type }) => async dispatch => {
    const operation = {
        date,
        category,
        description,
        sum,
        type
    }

    dispatch(addOperationRequest());

    try {
        const { data } = await axios.post('api/operations', operation);
        console.log(data);
        dispatch(addOperationSuccess(data.data.operation))
    } catch (error) {
        dispatch(addOperationError(error))
    }
}


export const deleteOperation = operationId => dispatch => {
    dispatch(deleteOperationRequest());

    axios
        .delete(`api/operations/${operationId}`)
        .then(() => dispatch(deleteOperationSuccess(operationId)))
        .catch(error => dispatch(deleteOperationError(error)));
}

// export const fetchAddTransaction = createAsyncThunk(
//     'transactions/fetchAddTransaction',
//     async (operation, { rejectWithValue }) => {
//         try {
//             const data = await transactionsApi.addTransaction(operation);
//             return data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     },
// );
