import React from 'react';
import BcgAuth from '../../components/BcgAuth/BcgAuth';
// import BcgAuthBottom from '../components/BcgAuthBottom/';
import FormContainer from '../../components/FormContainer/FormContainer';

import HomeTitle from '../../components/HomeTitle';
// import Authorization from '../components/Authorization';
import Registration from '../../components/Registration/Registration';
import RegistrationPageContainer from '../../components/RegistrationPageContainer/RegistrationPage';
import { BcgImg, Container, HomeContainer } from './HomeView.styled';

export default function HomeView() {
    return (
        // <div>Home Page
        //     {/* <Authorization />;
        //     <Registration />; */}
        //     <Registration/>
        //            </div>
        // <RegistrationPageContainer>
        
        <Container>
            <HomeContainer>
                <HomeTitle />
                <BcgImg/>
           </HomeContainer>
           <FormContainer>
                <Registration/>
            </FormContainer>
          </Container>
            
           
            
        // </RegistrationPageContainer>
    )
}
    
        
    
                
           
      
        

    
    


