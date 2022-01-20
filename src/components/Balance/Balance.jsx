import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
// import Modal from "../Modal/Modal";
import balanceOperations from '../../redux/balance/balance-operations';
import balanceSelectors from '../../redux/balance/balance-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import { Form, Title, FormInput, Button } from './Balance.styled';
import GoToReportsBtn from '../GoToReportsBtn/GoToReportsBtn';
import { enableES5 } from 'immer';

import balanceActions from '../../redux/balance/balance-actions';

const Balance = ({ balanceFromStore }) => {
  const dispatch = useDispatch();

  const [balanceToSet, setBalanceToSet] = useState(0);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // let balanceFromStore = useSelector(balanceSelectors.getBalance);

  const handleInputBalance = evt => {
    evt.preventDefault();

    setBalanceToSet(evt.target.value);
  };

  const handleUpdateBalance = evt => {
    evt.preventDefault();

    //       setTestBalance(data.data.user.balance);

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTU4OTVhYTEwOGY4MzVkMGVkNjE3YiIsImlhdCI6MTY0MjY5NjE3NH0.MkHNftK0ADW4cFeACECO8X8g0udAU10ehBld9vD_gDU';

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };

    fetch(
      'https://team-proj-smartfinance-back.herokuapp.com/api/operations/balance',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({ balance: balanceToSet }),
      },
    )
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        // return res.json();
        dispatch(balanceActions.setBalanceSum(Number(balanceToSet)));
      })
      // .then(data => {
      //   console.log(data);
      //   dispatch(balanceActions.setBalanceSum(Number(balanceToSet)));
      // })
      .catch(error => console.log(error.message));

    // const newBalance = e.target.balance.value.split(' ')[0];
    // dispatch(balanceOperations.setBalanceOperation(newBalance));
  };

  // const [setModalOpen, setModalClose] = useState(' ');
  // const toggleWindow = () => {
  //    setModalOpen(setModalOpen => !setModalOpen)
  // };
  //   defaultValue={
  //    parseFloat(
  //      balanceFromStore && typeof balanceFromStore === 'number'
  //        ? balanceFromStore
  //        : 0,
  //    ).toFixed(2) + 'UAN'
  //  }

  //onSubmit={updateBalance}

  return (
    <div>
      <Form>
        <Title>Баланс:</Title>
        {/* {setModalClose && <Modal onClose={toggleWindow}/>} */}
        <FormInput
          name="balance"
          type="text"
          defaultValue={balanceFromStore}
          onChange={handleInputBalance}
        ></FormInput>

        <Button type="button" onClick={handleUpdateBalance}>
          ПОДТВЕРДИТЬ
        </Button>
      </Form>
      <GoToReportsBtn />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    balanceFromStore: state.balance.initBalance,
  };
};

export default connect(mapStateToProps)(Balance);
