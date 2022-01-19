import { setBalanceApi } from '../../api/userApi';
import balanceActions from './balance-actions';

const setBalanceOperation = (balance) => dispatch => {

    dispatch(balanceActions.setBalanceRequest());

    setBalanceApi(balance)
    .then(( {data} ) => {
      console.log('balance set', data);
      dispatch(balanceActions.setBalanceSuccess(data));
    })
    .catch((error) => {
      dispatch(balanceActions.setBalanceError(error));
    });

  };

    

const balanceOperations = {
  setBalanceOperation
};

export default balanceOperations;