import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BcgAuth from '../../components/BcgAuth/BcgAuth';
// import BcgAuthBottom from '../components/BcgAuthBottom/';
import FormContainer from '../../components/FormContainer/FormContainer';
import queryString from 'query-string';
import ModalFunk from '../../components/Modal/ModalFunc'
import HomeTitle from '../../components/HomeTitle';
// import Authorization from '../components/Authorization';
import Registration from '../../components/Registration/Registration';
import {authSelectors } from '../../redux/auth';
import {  BottomContainer, BottomKapusta, Container, HomeContainer } from './HomeView.styled';
import LogIn from '../../components/LogIn/LogIn'
export default function HomeView({ location }) {
    // const { refreshToken, token } = queryString.parse(location);
    // const dispatch = useDispatch();
    
  //   useEffect(() => {
  //   if (token) {
  //     dispatch(authSelectors.loginGoogleSuccess(token));
  //     dispatch(authSelectors.refreshLoginGoogleSuccess(refreshToken));
  //   }
  // }, [dispatch, refreshToken, token]);

  const [login, setLogin] = useState(true);
  const onRegisterClick = () => {
    setLogin(false);
  };

  const onComeBackClick = () => {
    setLogin(true);
  };
    return (
    
        <Container>
            <HomeContainer>
                <HomeTitle />
               <ModalFunk />
           </HomeContainer>
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
    
        
    
                
           
      
        

    
    


