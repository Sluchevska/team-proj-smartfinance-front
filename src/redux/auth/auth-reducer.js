import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  
  logoutSuccess,
  logoutError,
  uploadAvatarRequest,
  uploadAvatarSuccess,
  uploadAvatarError,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,

  
  registerRequest,
  logoutRequest,
  loginRequest,
  
} from './auth-actions';

const initialUserState = { name: null, email: null, balance: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [uploadAvatarSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});



const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.token,

  [logoutSuccess]: () => null,
});
const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [registerSuccess]: () => null,
  [registerRequest]: () => null,
  
  [loginError]: setError,
  [loginSuccess]: () => null,
  [loginRequest]: () => null,
  [uploadAvatarError]: setError,
  [uploadAvatarSuccess]: () => null,
  [uploadAvatarRequest]: () => null,
  [logoutError]: setError,
  [logoutError]: () => null,
  [logoutRequest]: () => null,
  [getCurrentUserError]: setError,
  [getCurrentUserRequest]: () => null,
  [getCurrentUserSuccess]: () => null,
  
});

const isLogin = createReducer(false, {
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const isFetchigCurrentUser = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});


const authReducer = combineReducers({
  user,
  isLogin,
  token,
  error,
  isFetchigCurrentUser,
 
});
export {authReducer} ;


