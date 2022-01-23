import { setBalanceApi, getBalanceApi } from '../../api/userApi';
import balanceActions from './balance-actions';

const setUserBalance = balance => async dispatch => {
  dispatch(balanceActions.setUserBalanceRequest());
  await setBalanceApi(balance)
    .then(({ data }) => {
      const balance = data.user.balance;
      dispatch(balanceActions.setUserBalanceSuccess({ balance }));
    })
    .catch(error => {
      console.log(error.message);
      dispatch(balanceActions.setUserBalanceError(error));
    });
};

const getUserBalance = () => async dispatch => {
  dispatch(balanceActions.getUserBalanceRequest());

  await getBalanceApi()
    .then(({ data }) => {
      const balance = data.user.balance;
      dispatch(balanceActions.getUserBalanceSuccess({ balance }));
    })
    .catch(error => {
      dispatch(balanceActions.getUserBalanceError(error));
    });
};

const balanceOperations = {
  setUserBalance,
  getUserBalance,
};

export default balanceOperations;
