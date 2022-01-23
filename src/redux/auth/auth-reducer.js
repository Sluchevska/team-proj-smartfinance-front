import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutError,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  registerRequest,
  logoutRequest,
  loginRequest,
} from './auth-actions';

import { fetchAuthGoogle, fetchRedirectGoogle } from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [fetchAuthGoogle.fulfilled]: (_, { payload }) => payload.user,
  [fetchRedirectGoogle.fulfilled]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,

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

  [fetchAuthGoogle.fulfilled]: setError,
  [fetchRedirectGoogle.fulfilled]: setError,

  [loginError]: setError,
  [loginSuccess]: () => null,
  [loginRequest]: () => null,

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
  [getCurrentUserRequest]: () => true,
  [fetchAuthGoogle.fulfilled]: () => true,
  [fetchRedirectGoogle.fulfilled]: () => true,

  [registerError]: () => false,
  [loginError]: () => false,

  [fetchAuthGoogle.fulfilled]: () => false,
  [fetchRedirectGoogle.fulfilled]: () => false,

  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const isFetchingCurrentUser = createReducer(false, {
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
  isFetchingCurrentUser,
});
export { authReducer };
