import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const repeatEmailVerifyRequest = createAction('auth/repeatEmailVerifyRequest');
const repeatEmailVerifySuccess = createAction('auth/repeatEmailVerifySuccess');
const repeatEmailVerifyOk = createAction('auth/repeatEmailVerifyOk');
const repeatEmailVerifyError = createAction('auth/repeatEmailVerifyError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const uploadAvatarRequest = createAction('auth/uploadAvatarRequest');
const uploadAvatarSuccess = createAction('auth/uploadAvatarSuccess');
const uploadAvatarError = createAction('auth/uploadAvatarError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');



export {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  uploadAvatarRequest,
  uploadAvatarSuccess,
  uploadAvatarError,
  loginRequest,
  loginSuccess,
  loginError,
  
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  
  repeatEmailVerifyRequest,
  repeatEmailVerifySuccess,
  repeatEmailVerifyOk,
  repeatEmailVerifyError,
};

