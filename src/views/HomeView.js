import React from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
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
        <RegistrationPageContainer>
            <FormContainer>
                <Registration/>
            </FormContainer>
        </RegistrationPageContainer>
    )
}
    
        
    
                
           
      
        

    
    


