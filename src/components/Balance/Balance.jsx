import React, { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import balanceOperations from '../../redux/balance/balance-operations';
// import { balanceSelectors } from '../../redux/balance/balance-selectors';

import { Form, Title, FormInput, Button } from './Balance.styled';

const  Balance = () => {
  const dispatch = useDispatch();

//   const currentBalance = useSelector(balanceSelectors.balanceCurrent);

  const [balance, setBalance] = useState('');

  useEffect(() => {
     dispatch(balanceOperations.getBalance());
  }, [dispatch]);

  const handleClick = () => {
     dispatch(balanceOperations.updateBalance(parseFloat(balance)))
  };

  const onInputHandler = e => {
     setBalance(e.target.value);
  };


    return(
       
       <Form>
          <Title>Баланс:</Title>
          <FormInput
             type="text"
             value=""
             placeholder="00.00 UAH"
             onChange={onInputHandler}


          ></FormInput>
          <Button 
              type="button"
              onClick={handleClick}
          >ПОДТВЕРДИТЬ</Button>
    
       </Form>
    )
  }

export default Balance;