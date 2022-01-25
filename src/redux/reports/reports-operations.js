import * as transactionsApi from '../../api/userApi';
import {
  operationsRequest,
  operationsSuccess,
  operationsError,
} from './reports-actions';

export const fetchAllReportsByMonth = date => async dispatch => {
  dispatch(operationsRequest());
  try {
    const { data } = await transactionsApi.fetchMonthReports(date);
    dispatch(operationsSuccess(data));
  } catch (error) {
    dispatch(operationsError(error));
  }
};
