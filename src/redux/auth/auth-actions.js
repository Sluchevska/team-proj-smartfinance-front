import { createAction } from '@reduxjs/toolkit';

const repeatEmailVerifyRequest = createAction('auth/repeatEmailVerifyRequest');
const repeatEmailVerifySuccess = createAction('auth/repeatEmailVerifySuccess');
const repeatEmailVerifyOk = createAction('auth/repeatEmailVerifyOk');
const repeatEmailVerifyError = createAction('auth/repeatEmailVerifyError');

const AuthAuction = {
    repeatEmailVerifyError,
    repeatEmailVerifyOk,
    repeatEmailVerifySuccess,
    repeatEmailVerifyRequest
};
export default AuthAuction;

