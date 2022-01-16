const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getMessageEmailVerify = state => state.auth.isRepeatEmailVerify;

const getUserAvatar = state => state.auth.user.avatarURL;

const getFetchigCurrentUser = state => state.auth.isFetchigCurrentUser;

const getCurrentToken = state => state.auth.token;

const getAuthError = state => state.auth.error;

const authSelectors = {
 getIsAuthenticated,
  getUserName,
  getUserEmail,
  getMessageEmailVerify,
  getFetchigCurrentUser,
  getCurrentToken,
  getUserAvatar,
  getAuthError,
};
export default authSelectors;