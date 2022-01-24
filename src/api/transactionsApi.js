import axios from 'axios';


axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com';



export async function addTransaction(operation) {
    const { data } = await axios.post(`/api/operations/`, operation);

    return data;
}
