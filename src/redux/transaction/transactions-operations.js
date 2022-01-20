import * as transactionsApi from '../../api/transactionsApi';

import { createAsyncThunk } from '@reduxjs/toolkit';




export const fetchAddTransaction = createAsyncThunk(
    'transactions/fetchAddTransaction',
    async (operation, { rejectWithValue }) => {
        try {
            const data = await transactionsApi.addTransaction(operation);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const fetchDeleteTransaction = createAsyncThunk(
    'transactions/fetchDeleteTransaction',
    async (operationId, { rejectWithValue }) => {
        try {
            const data = await transactionsApi.deleteTransaction(operationId);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);