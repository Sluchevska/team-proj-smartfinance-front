/* eslint-disable no-ex-assign */
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from '../../api/userApi';
axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      console.log(data.result)
      token.set(data.token);
      toast.success(
        `The user has been successfully created. Welcome, ${data.user.name}!`,
      );
      return data;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;

      // eslint-disable-next-line no-ex-assign
      if ((error = 400)) {
        toast.warn('An account with the specified mail already exists.!');
      }

      return rejectWithValue({ status, statusText });
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await userApi.logIn(credentials);
      token.set(data.token);
      toast.success(`Welcome, ${data.user.name}!`);
      return data.result;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;

      if ((error = 400)) {
        toast.warn('Wrong login or password. Please, try again:)');
      }
      return rejectWithValue({ status, statusText });
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_state, { rejectWithValue }) => {
    try {
      await userApi.logOut();
      token.unset();
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;

      if ((error = 500)) {
        toast.warn('Logout error, please try again');
      }
      return rejectWithValue({ status, statusText });
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_state, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await userApi.getCurrentUser;
      return data.result.user;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      if ((error = 500)) {
        toast.warn('Server error. Try again');
      }
      return thunkAPI.rejectWithValue({ status, statusText });
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
