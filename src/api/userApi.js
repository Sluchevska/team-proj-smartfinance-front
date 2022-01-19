import axios from 'axios';

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


export async function fetchSignUp(credentials) {
       const data = await axios.post(`/api/users/register`, credentials);
    console.log(data)
    return data;
}

export async function fetchLogIn(credentials) {
    const data = await axios.post(`/api/users/login`, credentials);
    return data;
}

export async function fetchGetCurrentUser() {
    const data = await axios.get(`/api/users/current`);
    return data;
}

export async function fetchLogOut() {
    const data = await axios.get(`/api/users/logout`);
    console.log(data)
    return data;
}

export async function fetchVerifyToken() {
    const data = await axios.get(`/api/users/verify/:verificationToken`);
    return data;
}

// export async function fetchVerifyEmail(email) {
//     const data = await axios.post(`/api/users/verify`, email);
//     return data;
// }

export async function fetchUploadAvatar() {
    const data = await axios.patch(`/api/users/avatars`, FormData);
    return data;
}


export async function fetchMonthReports({month, year}){
    console.log("api", month, year);
    const {data} = await axios.get(`/api/operations/info?year=${year}&month=${month}`)
    console.log('api', data);
    return data;
}



export const setBalanceApi = (balance) => {
  return axios
  .post(`/api/users/balance`, { balance: balance })
  .then(({ data }) => data)
  .catch((error) => {
    throw error;
  });
};


