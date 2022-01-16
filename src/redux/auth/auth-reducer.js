import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialUserState = { name: null, email: null, balance: 0 };

const user = createReducer(initialUserState, {
  [authOperations.register.fulfilled]: (state, { payload }) => payload.user,

  [authOperations.logIn.fulfilled]: (state, { payload }) => payload.user,

  [authOperations.logOut.fulfilled]: () => initialUserState,

  [authOperations.fetchCurrentUser]: (_, { payload }) => payload,
  // [authOperations.uploadAvatar]: (_, { payload }) => payload
});

const token = createReducer(null, {
  [authOperations.fetchCurrentUser.fulfilled]: (_, { payload }) =>
    payload.token,
  [authOperations.logIn.fulfilled]: (_, { payload }) => payload.token,
  [authOperations.logIn.fulfilled]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
   [authOperations.logIn.fulfilled]: null,
  [authOperations.register.rejected]: setError,
  [authOperations.register.fulfilled]: (_, { payload }) => payload.code,
  [authOperations.logIn.rejected]: setError,
  [authOperations.fetchCurrentUser.rejected]: setError,
[authOperations.fetchCurrentUser.fulfilled]: ()=>null,
  [authOperations.logOut.fulfilled]: null,
[authOperations.fetchCurrentUser.pending]: ()=>null,
  [authOperations.logOut.rejected]: () => setError,
   [authOperations.fetchVerifyEmail.fulfilled]: setError,
  [authOperations.fetchVerifyEmail.rejected]: () => null,
  [authOperations.fetchVerifyEmail.pending]: () => null,
});

const refreshToken = createReducer(null, {
  [authOperations.logIn.fulfilled]: (_, { payload }) => payload.refreshToken,
  [authOperations.logOut.fulfilled]: () => null,
});

const isLogin = createReducer(false, {
  [authOperations.fetchCurrentUser.fulfilled]: () => true,
  [authOperations.logOut.fulfilled]: () => false,
  [authOperations.logIn.fulfilled]: () => true,
  [authOperations.logOut.fulfilled]: () => false,
  [authOperations.logIn.rejected]: () => false,
  [authOperations.fetchCurrentUser.rejected]: () => false,
});

const isFetchCurrentUser = createReducer(false, {
  [authOperations.fetchCurrentUser.pending]: () => true,
  [authOperations.fetchCurrentUser.fulfilled]: () => false,
  [authOperations.fetchCurrentUser.rejected]: () => false,
});

const isRepeatEmailVerify = createReducer(null, {
  [authOperations.fetchVerifyEmail.fulfilled]: (_, { payload }) =>
    payload.data.message,
  [authOperations.fetchVerifyEmail.rejected]: () => null,
});


const authReducer = combineReducers({
  user,
  isLogin,
  token,
  refreshToken,
  error,
  isFetchCurrentUser,
  isRepeatEmailVerify,
});

export default authReducer;
