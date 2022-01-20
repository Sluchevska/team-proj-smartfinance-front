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

