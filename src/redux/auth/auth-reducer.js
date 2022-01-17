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

const initialUserState = { name: null, email: null, balance: 0 };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [uploadAvatarSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const refreshToken = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.refreshToken,
  // [refreshLoginGoogleSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => null,
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.token,
  // [loginGoogleSuccess]: (_, { payload }) => payload,
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
  // [loginGoogleError]: setError,
  // [loginGoogleSuccess]: () => null,
  // [loginGoogleRequest]: () => null,
  // [refreshLoginGoogleError]: setError,
  // [refreshLoginGoogleSuccess]: () => null,
  // [refreshLoginGoogleRequest]: () => null,
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
  refreshToken,
  error,
  isFetchigCurrentUser,
 
});
export {authReducer} ;

// const initialUserState = { name: null, email: null, balance: 0 };

// const user = createReducer(initialUserState, {
//   [authOperations.register.fulfilled]: (state, { payload }) => payload.user,

//   [authOperations.logIn.fulfilled]: (state, { payload }) => payload.user,

//   [authOperations.logOut.fulfilled]: () => initialUserState,

//   [authOperations.fetchCurrentUser]: (_, { payload }) => payload,
//   // [authOperations.uploadAvatar]: (_, { payload }) => payload
// });

// const token = createReducer(null, {
//   [authOperations.fetchCurrentUser.fulfilled]: (_, { payload }) =>
//     payload.token,
//   [authOperations.logIn.fulfilled]: (_, { payload }) => payload.token,
//   [authOperations.logIn.fulfilled]: () => null,
// });

// const setError = (_, { payload }) => payload;

// const error = createReducer(null, {
//    [authOperations.logIn.fulfilled]: null,
//   [authOperations.register.rejected]: setError,
//   [authOperations.register.fulfilled]: (_, { payload }) => payload.code,
//   [authOperations.logIn.rejected]: setError,
//   [authOperations.fetchCurrentUser.rejected]: setError,
// [authOperations.fetchCurrentUser.fulfilled]: ()=>null,
//   [authOperations.logOut.fulfilled]: null,
// [authOperations.fetchCurrentUser.pending]: ()=>null,
//   [authOperations.logOut.rejected]: () => setError,
//    [authOperations.fetchVerifyEmail.fulfilled]: setError,
//   [authOperations.fetchVerifyEmail.rejected]: () => null,
//   [authOperations.fetchVerifyEmail.pending]: () => null,
// });

// const refreshToken = createReducer(null, {
//   [authOperations.logIn.fulfilled]: (_, { payload }) => payload.refreshToken,
//   [authOperations.logOut.fulfilled]: () => null,
// });

// const isLogin = createReducer(false, {
//   [authOperations.fetchCurrentUser.fulfilled]: () => true,
//   [authOperations.logOut.fulfilled]: () => false,
//   [authOperations.logIn.fulfilled]: () => true,
//   [authOperations.logOut.fulfilled]: () => false,
//   [authOperations.logIn.rejected]: () => false,
//   [authOperations.fetchCurrentUser.rejected]: () => false,
// });

// const isFetchCurrentUser = createReducer(false, {
//   [authOperations.fetchCurrentUser.pending]: () => true,
//   [authOperations.fetchCurrentUser.fulfilled]: () => false,
//   [authOperations.fetchCurrentUser.rejected]: () => false,
// });

// const isRepeatEmailVerify = createReducer(null, {
//   [authOperations.fetchVerifyEmail.fulfilled]: (_, { payload }) =>
//     payload.data.message,
//   [authOperations.fetchVerifyEmail.rejected]: () => null,
// });


// const authReducer = combineReducers({
//   user,
//   isLogin,
//   token,
//   refreshToken,
//   error,
//   isFetchCurrentUser,
//   isRepeatEmailVerify,
// });

// export default authReducer;
