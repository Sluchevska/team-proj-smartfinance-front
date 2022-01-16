import axios from 'axios';

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


export async function register(credentials) {
    const data = await axios.post(`/api/users/registration`, credentials);
    return data;
}

export async function logIn(credentials) {
    const data = await axios.post(`/api/users/login`, credentials);
    return data;
}

export async function getCurrentUser() {
    const data = await axios.get(`/api/users/current`);
    return data;
}

export async function logOut() {
    const data = await axios.get(`/api/users/logout`);
    return data;
}

export async function fetchVerifyToken() {
    const data = await axios.get(`/api/users/verify/:verificationToken`);
    return data;
}

export async function fetchVerifyEmail(email) {
    const data = await axios.post(`/api/users/verify`, email);
    return data;
}

export async function fetchUploadAvatar() {
    const data = await axios.patch(`/api/users/avatars`, FormData);
    return data;
}


