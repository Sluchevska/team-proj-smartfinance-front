import axios from 'axios';

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com';



export async function addTransaction(operation) {
    const { data } = await axios.post(`/api/operations/`, operation);
    console.log({ data })
    return data;
}
export async function deleteTransaction(operationId) {
    const { data } = await axios.delete(`/api/operations/${operationId}`);
    return data;
}