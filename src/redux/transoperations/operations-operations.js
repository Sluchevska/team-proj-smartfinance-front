import axios from 'axios';
import balanceActions from '../balance/balance-actions';
import {
  addOperationRequest,
  addOperationSuccess,
  addOperationError,
  deleteOperationRequest,
  deleteOperationSuccess,
  deleteOperationError,
  fetchOperationRequest,
  fetchOperationSuccess,
  fetchOperationError,
} from './operations-action';

export const fetchOperations = (year, month, day, type) => async dispatch => {
  console.log('fetch запрос на операции с бэка');
  dispatch(fetchOperationRequest());

  try {
    const { data } = await axios.get(
      `/api/operations/byday?year=${year}&month=${month}&day=${day}&type=${type}`,
    );
    dispatch(fetchOperationSuccess(data.data.operations));
  } catch (error) {
    dispatch(fetchOperationError(error.message));
  }
};

export const addOperation =
  ({ date, category, description, sum, type }) =>
  async dispatch => {
    const operation = {
      date,
      category,
      description,
      sum,
      type,
    };

    dispatch(addOperationRequest());

    try {
      const { data } = await axios.post('api/operations', operation);
      dispatch(addOperationSuccess(data.data.operation));
      dispatch(balanceActions.updateUserBalanceSuccess(data.data.balance));
    } catch (error) {
      dispatch(addOperationError(error));
    }
  };

export const deleteOperation = operationId => dispatch => {
  dispatch(deleteOperationRequest());

  axios
    .delete(`api/operations/${operationId}`)
    .then(data => {
      dispatch(deleteOperationSuccess(operationId));
      dispatch(balanceActions.updateUserBalanceSuccess(data.data.balance));
    })
    .catch(error => dispatch(deleteOperationError(error)));
};
