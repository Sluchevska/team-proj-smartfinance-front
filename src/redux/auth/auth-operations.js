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
   fetchVerifyToken
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
  console.log(credentials)
  dispatch(loginRequest());
  try {
    const response = await fetchLogIn(credentials);
    token.set(response.data.data);
    dispatch(loginSuccess(response.data.data));
  } catch ({ response }) {
    dispatch(loginError(response.data.message));
   
  }
};

const logOut = () => async dispatch => {
  console.log(token)
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
    // dispatch(setTotalBalanceSuccess(response.data.user.balance));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      return await refresh(dispatch, getState);
    }
    dispatch(getCurrentUserError(response.data.message));
   
  }
};

const refresh = async (dispatch, getState) => {
  const {
    auth: { refreshToken: persistedRefreshToken },
  } = getState();
  token.set(persistedRefreshToken);
  try {
    const response = await  fetchVerifyToken();
    token.set(response.data.data.token);
    dispatch(getCurrentUserSuccess(response.data.data.user));
      dispatch(
      loginSuccess({
        token: response.data.data.token,
        refreshToken: response.data.data.refreshToken,
      }),
    );
  } catch (error) {
    dispatch(logoutSuccess());
    token.unset();
    console.log(error.message);
  }
};

// const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, { rejectWithValue }) => {
//        try {
//       const data  = await register(credentials);
//     console.log(data)
//       toast.success(
//         `The user has been successfully created. Welcome, ${data.user.email}!`,
//       );
//       return data;
//     } catch (error) {
//       const {
//         response: { status, statusText },
//       } = error;

//       // eslint-disable-next-line no-ex-assign
//       if ((error = 400)) {
//         toast.warn('An account with the specified mail already exists.!');
//       }

//       return rejectWithValue({ status, statusText });
//     }
//   },
// );

// const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await userApi.logIn(credentials);
    
//       toast.success(`Welcome, ${data.user.name}!`);
//       return data;
//     } catch (error) {
//       const {
//         response: { status, statusText },
//       } = error;

//       if ((error = 400)) {
//         toast.warn('Wrong login or password. Please, try again:)');
//       }
//       return rejectWithValue({ status, statusText });
//     }
//   },
// );

// const logOut = createAsyncThunk(
//   'auth/logout',
//   async (_state, { rejectWithValue }) => {
//     try {
//       await userApi.logOut();
     
//     } catch (error) {
//       const {
//         response: { status, statusText },
//       } = error;

//       if ((error = 500)) {
//         toast.warn('Logout error, please try again');
//       }
//       return rejectWithValue({ status, statusText });
//     }
//   },
// );

// const fetchCurrentUser = createAsyncThunk(
//   'auth/current',
//   async (_state, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }

//     userApi.token.set(persistedToken);
//     try {
//       const { data } = await userApi.getCurrentUser;
//       return data;
//     } catch (error) {
//       const {
//         response: { status, statusText },
//       } = error;
//       if ((error = 500)) {
//         toast.warn('Server error. Try again');
//       }
//       return thunkAPI.rejectWithValue({ status, statusText });
//     }
//   },
// );
//  const fetchVerifyToken = createAsyncThunk(
//   'auth/fetchVerify',
//   async (verificationToken, { rejectWithValue }) => {
//     try {
//       const data = await userApi.fetchVerifyToken(verificationToken);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );
// const fetchVerifyEmail = createAsyncThunk(
//   'auth/fetchVerifyEmail',
//   async (email, { rejectWithValue }) => {
//     try {
//       const data =  await userApi.fetchVerifyEmail(email);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );


export {
  register,

  logOut,
  logIn,
  getCurrentUser,
  // refresh,
  uploadAvatar,
};

