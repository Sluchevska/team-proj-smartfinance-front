import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// import BcgAuthBottom from '../components/BcgAuthBottom/';
import FormContainer from '../../components/FormContainer/FormContainer';
import queryString from 'query-string';
import ModalFunk from '../../components/Modal/ModalFunc'
import HomeTitle from '../../components/HomeTitle';
// import Authorization from '../components/Authorization';
import Registration from '../../components/Registration/Registration';
import {authSelectors } from '../../redux/auth';
import {  BottomContainer, BottomKapusta, Container, HomeContainer } from './MainView.styled';
import LogIn from '../../components/LogIn/LogIn'
import Login from '../../routs/Home';
export default function HomeView({ location }) {
  

  const [login, setLogin] = useState(true);
  const onRegisterClick = () => {
    setLogin(false);
  };

  const onComeBackClick = () => {
    setLogin(true);
  };
    return (
    
        <Container>
            {/* <HomeContainer> */}
                <HomeTitle />
               {/* <ModalFunk /> */}
           {/* </HomeContainer> */}
           <FormContainer>
               {login ? (
                    <LogIn onClickRegister={onRegisterClick} />
                ) : (<Registration onClickComeBack={onComeBackClick} />)}
               
            </FormContainer>
            <BottomContainer>
                <BottomKapusta />
                </BottomContainer>
          </Container>
            
           
  
    )
}
    
        
    
                
           
      
        

    
    


