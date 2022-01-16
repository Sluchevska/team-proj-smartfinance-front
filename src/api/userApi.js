import axios from 'axios';

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com/';

export async function register(credentials) {
    const data = await axios.post(`/api/users/signup`, credentials);
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


