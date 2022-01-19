import * as transactionsApi from '../../api/userApi'
import axios from "axios";
import {operationsRequest, operationsSuccess, operationsError} from './transaction-actions'


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};


  export const fetchAllTransactionsByMonth = (date) => async (dispatch, getState) => {
        dispatch(operationsRequest());
        const authToken = getState().auth.user.token;
        try {
          token.set(authToken);
      const {data} = await transactionsApi.fetchMonthReports(date);
    
dispatch(operationsSuccess(data))  
        }
        catch(error){
            dispatch(operationsError(error));
        }
    };

