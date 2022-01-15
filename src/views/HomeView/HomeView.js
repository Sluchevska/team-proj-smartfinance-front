import React from 'react';
import BcgAuth from '../../components/BcgAuth/BcgAuth';
// import BcgAuthBottom from '../components/BcgAuthBottom/';
import FormContainer from '../../components/FormContainer/FormContainer';

import HomeTitle from '../../components/HomeTitle';
// import Authorization from '../components/Authorization';
import Registration from '../../components/Registration/Registration';

import { BcgImg, Container, HomeContainer } from './HomeView.styled';

export default function HomeView() {
    return (
    
        <Container>
            <HomeContainer>
                <HomeTitle />
                <BcgImg/>
           </HomeContainer>
           <FormContainer>
                <Registration/>
            </FormContainer>
          </Container>
            
           
  
    )
}
    
        
    
                
           
      
        

    
    


