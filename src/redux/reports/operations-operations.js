import axios from 'axios';
import {
  addOperationRequest,
  addOperationSuccess,
  addOperationError,
  deleteOperationRequest,
  deleteOperationSuccess,
  deleteOperationError,
  fetchByCategoryPeriodRequest,
  fetchByCategoryPeriodSuccess,
  fetchByCategoryPeriodError,
  fetchByTypePeriodRequest,
  fetchByTypePeriodSuccess,
  fetchByTypePeriodError
} from './operations-actions';

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com';

// GET @ /tasks
// const fetchOperations = () => async dispatch => {
//   dispatch(fetchOperationsRequest());

//   try {
//     const { data } = await axios.get('/operations');

//     dispatch(fetchOperationsSuccess(data));
//   } catch (error) {
//     dispatch(fetchOperationsError(error.message));
//   }
// };

export const fetchByCategoryPeriod = (month, year, category) => async dispatch => {
  dispatch(fetchByCategoryPeriodRequest());
  try {
    const { data } = await axios.get(`/operations?year=${year}?month=${month}?category=${category}`);
    dispatch(fetchByCategoryPeriodSuccess(data));
  } catch (error) {
    dispatch(fetchByCategoryPeriodError(error.message));
  }
};

export const fetchByTypePeriod = (month, year, type) => async dispatch => {
  dispatch(fetchByTypePeriodRequest());
  try {
    const { data } = await axios.get(`/operations?year=${year}?month=${month}?type=${type}`);
    dispatch(fetchByTypePeriodSuccess(data));
  } catch (error) {
    dispatch(fetchByTypePeriodError(error.message));
  }
};

// POST @ /tasks
export const addOperation = (date, category, description, type, sum) => dispatch => {
  const operation = {
    date,
    category,
    description,
    type,
    sum
  };

  dispatch(addOperationRequest());

  axios
    .post('/operations', operation)
    .then(({ data }) => dispatch(addOperationSuccess(data)))
    .catch(error => dispatch(addOperationError(error.message)));
};

// DELETE @ /tasks/:id
export const deleteOperation = operationId => dispatch => {
  dispatch(deleteOperationRequest());

  axios
    .delete(`/operations/${operationId}`)
    .then(() => dispatch(deleteOperationSuccess(operationId)))
    .catch(error => dispatch(deleteOperationError(error.message)));
};