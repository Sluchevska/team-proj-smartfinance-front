import React from 'react';
import BcgAuth from '../components/BcgAuth/BcgAuth';
// import BcgAuthBottom from '../components/BcgAuthBottom/';
import FormContainer from '../components/FormContainer/FormContainer';
import HomeTitle from '../components/HomeTitle';
// import Authorization from '../components/Authorization';
import Registration from '../components/Registration/Registration';
import RegistrationPageContainer from '../components/RegistrationPageContainer/RegistrationPage';

export default function HomeView() {
    return (
        // <div>Home Page
        //     {/* <Authorization />;
        //     <Registration />; */}
        //     <Registration/>
        //            </div>
        // <RegistrationPageContainer>
        <div>
            <HomeTitle />
            <BcgAuth />
           <FormContainer>
                <Registration/>
            </FormContainer>
            </div>
            // {/* <BcgAuthBottom/> */}
            
        // </RegistrationPageContainer>
    )
}
    
        
    
                
           
      
        

    
    


