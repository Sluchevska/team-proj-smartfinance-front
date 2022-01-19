import React, {  useEffect }  from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import Modal from "../Modal/Modal";
import balanceOperations from '../../redux/balance/balance-operations';
import  balanceSelectors from '../../redux/balance/balance-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import { Form, Title, FormInput, Button } from './Balance.styled';
import GoToReportsBtn from '../GoToReportsBtn/GoToReportsBtn';

const  Balance = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getCurrentUser());
}, [dispatch]);

   let balanceFromStore = useSelector(balanceSelectors.getBalance);

   const updateBalance = (e) => {
      e.preventDefault();

      const newBalance = e.target.balance.value.split(" ")[0];
      dispatch(balanceOperations.setBalanceOperation(newBalance));

      
   };
   
   // const [setModalOpen, setModalClose] = useState(' ');
   // const toggleWindow = () => {
   //    setModalOpen(setModalOpen => !setModalOpen)
   // };


    return(
       
       <div>
          <Form onSubmit={updateBalance}>

          <Title>Баланс:</Title>
          {/* {setModalClose && <Modal onClose={toggleWindow}/>} */}
          <FormInput
             name="balance"
             type="text"
             defaultValue={
                parseFloat(
                   balanceFromStore && typeof balanceFromStore === "number"
                   ? balanceFromStore
                   : 0
                   ).toFixed(2) + "UAN"
               }
          ></FormInput>
         
          <Button 
              type="submit"
          >ПОДТВЕРДИТЬ</Button>
    
       </Form>
       <GoToReportsBtn/>
       </div>
       
    )
  }

export default Balance;