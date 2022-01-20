const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;



const getUserAvatar = state => state.auth.user.avatarURL;

const getFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getCurrentToken = state => state.auth.token;


export{
 getIsAuthenticated,
  getUserName,
  getUserEmail,
 
  getFetchingCurrentUser,
  getCurrentToken,
  getUserAvatar,
 
};
