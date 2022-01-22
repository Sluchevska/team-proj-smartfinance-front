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
      return data;
}


export async function fetchUploadAvatar() {
    const data = await axios.patch(`/api/users/avatars`, FormData);
    return data;
}

export async function fetchRefreshToken() {
  const data = await axios.get('/api/users/refreshtoken')
  return data
}


export async function fetchMonthReports({month, year}){
  const monthApi = pad(month);
  function pad(n) {
    if (n < 10) return '0' + n;
    return n;
  }
const {data} = await axios.get(`/api/operations/info?year=${year}&month=${monthApi}`)
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


