/* eslint-disable no-ex-assign */
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  token,
  fetchSignUp,
  fetchLogIn,
  fetchLogOut,
  // fetchUploadAvatar,
  fetchGetCurrentUser,
  fetchGoogleAuth,
  fetchGoogleRedirect,

} from '../../api/userApi.js';
import {
  registerRequest,
  registerSuccess,
  registerError,
  // uploadAvatarRequest,
  // uploadAvatarSuccess,
  // uploadAvatarError,
  
  logoutRequest,
  logoutSuccess,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions.js';

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com/';

const register = credentials => async dispatch => {

 dispatch(registerRequest());
  try {
    const response = await fetchSignUp(credentials);
    dispatch(registerSuccess(response.data));
     toast.success(`На ваш e-mail отправлено письмо для подтверждения`);
 
  } catch ({ response }) {
    dispatch(registerError(response.data.message));
       toast.warn(`${response.data.message}`);
    
  }
};

export const fetchAuthGoogle = createAsyncThunk(
  'auth/fetchGoogleAuth',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchGoogleAuth();
        return data;
    } catch (error) {
      return rejectWithValue(error.response.data)
      
    }
  },
);

export const fetchRedirectGoogle = createAsyncThunk(
  'auth/fetchGoogleRedirect',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchGoogleRedirect();
          return data;
    } catch (error) {
      return rejectWithValue(error.message)
      
    }
  },
);



const logIn = credentials => async dispatch => {

  dispatch(loginRequest());
  try {
    const response = await fetchLogIn(credentials);
  
    token.set(response.data.data.token);
     toast.success(`Welcome, ${response.data.data.user.name}!`);
      dispatch(loginSuccess(response.data.data));
  } catch ({ response }) {
    dispatch(loginError(response.data.message));
   toast.warn(`${response.data.message}`);
   
  }
};

const logOut = () => async dispatch => {
 
  dispatch(logoutRequest());
  try {
    await fetchLogOut();
    token.unset();
    dispatch(logoutSuccess());
  } catch ({ response }) {
    token.unset();
    dispatch(logoutSuccess());
   
  }
};



const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
 
 

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await fetchGetCurrentUser();
    dispatch(getCurrentUserSuccess(response.data.data.user));
     
     } catch ({ response }) {
    
    dispatch(getCurrentUserError(response.data.message));
   
  }
};






export {
  register,

  logOut,
  logIn,
  getCurrentUser,
  

};

