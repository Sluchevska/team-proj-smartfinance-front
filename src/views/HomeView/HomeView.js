import React from 'react';
import BcgAuth from '../../components/BcgAuth/BcgAuth';
// import BcgAuthBottom from '../components/BcgAuthBottom/';
import FormContainer from '../../components/FormContainer/FormContainer';

import ModalFunk from '../../components/Modal/ModalFunc'
import HomeTitle from '../../components/HomeTitle';
// import Authorization from '../components/Authorization';
import Registration from '../../components/Registration/Registration';

import {  BottomContainer, BottomKapusta, Container, HomeContainer } from './HomeView.styled';

export default function HomeView() {
    return (
    
        <Container>
            <HomeContainer>
                <HomeTitle />
               <ModalFunk />
           </HomeContainer>
           <FormContainer>
                <Registration/>
            </FormContainer>
            <BottomContainer>
                <BottomKapusta />
                </BottomContainer>
          </Container>
            
           
  
    )
}
    
        
    
                
           
      
        

    
    


