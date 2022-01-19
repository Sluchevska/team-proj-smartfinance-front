import React, {  useEffect, useState }  from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Modal from "../Modal/Modal";
import balanceOperations from '../../redux/balance/balance-operations';
import  balanceSelectors from '../../redux/balance/balance-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import { Title, FormInput, Button, BalanceContainer, FormContainer } from './Balance.styled';
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
const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);


    return(
       
       <BalanceContainer>
          <FormContainer onSubmit={updateBalance}>
             <label>
           <Title>Баланс:</Title>     

          
          {/* {setModalClose && <Modal onClose={toggleWindow}/>} */}
          <FormInput
                name="balance"
                placeholder='00.00'
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
    </label>
          </FormContainer>
          
       <GoToReportsBtn/>
       </BalanceContainer>
       
    )
  }

export default Balance;