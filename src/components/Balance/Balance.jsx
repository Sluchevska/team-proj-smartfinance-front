import React  from 'react';
import { Form, Title, FormInput, Button } from './Balance.styled';

const  Balance = () => {
  

    //const handleChange = e => {
      //e.preventDefault();
      //if () {
        //return toast.info('Привет! Для начала работы внеси текущий баланс своего счета!  Ты не можешь тратить деньги пока их у тебя нет:)')
      //}
    //}
     //handleSubmit = () => {

     //}
  

    return(
       
       <Form>
          <Title>Баланс:</Title>
          <FormInput
             type="text"
             value=""
             //onChange={handleChange}
            placeholder="00.00 UAH"

          ></FormInput>
          <Button type="submit"
          //onClick={handleSubmit}
          >ПОДТВЕРДИТЬ</Button>
    
       </Form>
    )
  }

export default Balance;