import axios from 'axios';

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com';

export const fetchOperations = ({operationId, day, month, year, operationType}) => {
    return axios
        .get(`/operations/byday?${operationId}&${day}&${month}&${year}${operationType}`)
        .then(response => response.data);
};

export const addOperation = operation => {
    return axios
        .post('/operations', operation)
        .then(({ data }) => data);
};

export const deleteOperation = operationId => {
    return axios.delete(`/operations/${operationId}`);
};

