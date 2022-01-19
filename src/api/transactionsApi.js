import axios from 'axios';

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com';

// export async function allTransactions() {
//     const { data } = await axios.get(`/api/transactions/`);
//     return data;
// }

// export async function allTransactionsByYear(year) {
//     const { data } = await axios.get(`/api/transactions/byYear/${year}`);
//     return data;
// }

// export async function allTransactionsByCategory(year, month) {
//     const { data } = await axios.get(
//         `/api/transactions/byCategory/${year}/${month}`,
//     );
//     return data;
// }

// export async function allTransactionsByMonth({ year, month }) {
//     const { data } = await axios.get(
//         `/api/transactions/byMonth/${year}/${month}`,
//     );
//     return data.data;
// }

export async function addTransaction(operation) {
    const { data } = await axios.post(`/api/operations/`, operation);
    return data;
}


export async function deleteTransaction(operationId) {
    const { data } = await axios.delete(`/api/operations/${operationId}`);

    return data;
}