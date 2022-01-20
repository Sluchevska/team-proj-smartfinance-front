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
  fetchUploadAvatar,
  fetchGetCurrentUser,

} from '../../api/userApi.js';
import {
  registerRequest,
  registerSuccess,
  registerError,
  uploadAvatarRequest,
  uploadAvatarSuccess,
  uploadAvatarError,
  
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
  } catch ({ response }) {
    dispatch(registerError(response.data.message));
    
  }
};


const logIn = credentials => async dispatch => {

  dispatch(loginRequest());
  try {
    const response = await fetchLogIn(credentials);
    token.set(response.data.data.user.token);
    dispatch(loginSuccess(response.data.data));
  } catch ({ response }) {
    dispatch(loginError(response.data.message));
   
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

const uploadAvatar = formData => async (dispatch, getState) => {
  dispatch(uploadAvatarRequest());
  try {
    const response = await fetchUploadAvatar(formData);
    dispatch(uploadAvatarSuccess(response.data.data));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      await refresh(dispatch, getState);
      const response = await fetchUploadAvatar(formData);
      dispatch(uploadAvatarSuccess(response.data.data));
    } else {
      dispatch(uploadAvatarError(response.data.message));
    
    }
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
    dispatch(getCurrentUserSuccess(response.data.user));
    console.log(response.data.user)
     } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      return await refresh(dispatch, getState);
    }
    dispatch(getCurrentUserError(response.data.message));
   
  }
};



export {
  register,

  logOut,
  logIn,
  getCurrentUser,

  uploadAvatar,
};

