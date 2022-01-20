import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import Modal from "../Modal/Modal";
import balanceOperations from '../../redux/balance/balance-operations';
import balanceSelectors from '../../redux/balance/balance-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import { Form, Title, FormInput, Button } from './Balance.styled';
import GoToReportsBtn from '../GoToReportsBtn/GoToReportsBtn';

const Balance = () => {
  const dispatch = useDispatch();

  const [testBalance, setTestBalance] = useState(0);

  console.log(testBalance);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  let balanceFromStore = useSelector(balanceSelectors.getBalance);

  const updateBalance = e => {
    e.preventDefault();

    const newBalance = e.target.balance.value.split(' ')[0];
    dispatch(balanceOperations.setBalanceOperation(newBalance));
  };

  // const [setModalOpen, setModalClose] = useState(' ');
  // const toggleWindow = () => {
  //    setModalOpen(setModalOpen => !setModalOpen)
  // }; onSubmit={updateBalance}
  //   defaultValue={
  //    parseFloat(
  //      balanceFromStore && typeof balanceFromStore === 'number'
  //        ? balanceFromStore
  //        : 0,
  //    ).toFixed(2) + 'UAN'
  //  }

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTU4OTVhYTEwOGY4MzVkMGVkNjE3YiIsImlhdCI6MTY0MjY2NjAwNn0.DhoswcMV8f0sFfj7XyT3vHIDHyRkhWJpW8QppQPK60U';

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };

  return (
    <div>
      <Form>
        <Title>Баланс:</Title>
        {/* {setModalClose && <Modal onClose={toggleWindow}/>} */}
        <FormInput
          name="balance"
          type="text"
          defaultValue={testBalance}
          onChange={evt => {
            evt.preventDefault();
            setTestBalance(evt.target.value);
          }}
        ></FormInput>

        <Button
          type="submit"
          onClick={() => {
            fetch(
              'https://team-proj-smartfinance-back.herokuapp.com/api/operations/balance',
              {
                method: 'POST',
                headers,
                body: JSON.stringify({ balance: testBalance }),
              },
            )
              .then(res => {
                //  if (!res.ok) {
                //    throw new Error(res.status);
                //  }

                return res.json();
              })
              .then(data => {
                console.log(data);
                console.log(data.data.user.balance);
                setTestBalance(data.data.user.balance);
              })
              .catch(error => console.log(error.message));
          }}
        >
          ПОДТВЕРДИТЬ
        </Button>
      </Form>
      <GoToReportsBtn />
    </div>
  );
};

export default Balance;
