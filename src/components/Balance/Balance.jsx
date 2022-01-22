import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch, connect } from 'react-redux';
import ModalGetBalance from '../Modal/ModalBalance/ModalGetBalance';
import balanceOperations from '../../redux/balance/balance-operations';
import balanceSelectors from '../../redux/balance/balance-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import {
  Title,
  FormInput,
  Button,
  BalanceContainer,
  FormContainer,
  InputContainer,
  ViewContainer,
} from './Balance.styled';
import GoToReportsBtn from '../GoToReportsBtn/GoToReportsBtn';
import balanceActions from '../../redux/balance/balance-actions';

const Balance = ({ balanceFromStore }) => {
  const dispatch = useDispatch();

  const [balanceToSet, setBalanceToSet] = useState(0);
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleInputBalance = evt => {
    evt.preventDefault();

    setBalanceToSet(evt.target.value);
  };

  const handleUpdateBalance = evt => {
    evt.preventDefault();

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTU4OTVhYTEwOGY4MzVkMGVkNjE3YiIsImlhdCI6MTY0Mjg1MzgxOH0.durSFyXWdWLkb6qiBcP6mGMMjB-lrOcrkW1_mqOlpFs';

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

        // setFirstVisit(false);

        dispatch(balanceActions.setBalanceSum(Number(balanceToSet)));
      })
      // .then(data => {
      //   console.log(data);
      //   dispatch(balanceActions.setBalanceSum(Number(balanceToSet)));
      // })
      .catch(error => console.log(error.message));

    // не мое - const newBalance = e.target.balance.value.split(' ')[0];
    // не мое - dispatch(balanceOperations.setBalanceOperation(newBalance));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  return (
    //  <ViewContainer>
    <BalanceContainer>
      <FormContainer onSubmit={handleUpdateBalance}>
        <Title>
          Баланс:
          <InputContainer>
            {/* {setModalClose && <Modal onClose={toggleWindow}/>} */}

            {!firstVisit ? (
              <div>1000</div>
            ) : (
              <>
                <FormInput
                  onChange={handleInputBalance}
                  name="balance"
                  placeholder="00.00"
                  type="text"
                  autoComplete="off"
                  defaultValue={balanceFromStore}
                  // defaultValue={
                  //   parseFloat(
                  //     balanceFromStore && typeof balanceFromStore === 'number'
                  //       ? balanceFromStore
                  //       : 0,
                  //   ).toFixed(2) + 'UAH'
                  // }
                ></FormInput>

                <Button type="submit">ПОДТВЕРДИТЬ</Button>
              </>
            )}
          </InputContainer>
          <ModalGetBalance />
        </Title>
      </FormContainer>
    </BalanceContainer>

    //    {/* <GoToReportsBtn />}
    //  </ViewContainer> */
  );
};

const mapStateToProps = state => {
  return {
    balanceFromStore: state.balance.initBalance,
  };
};

export default connect(mapStateToProps)(Balance);
