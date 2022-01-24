import React from 'react';
import Balance from '../components/Balance/Balance.jsx';
import { ViewContainer } from '../components/Balance/Balance.styled.js';
import GoToReportsBtn from '../components/GoToReportsBtn/GoToReportsBtn.js';
import IncomePage from '../components/IncomePage';


export default function IncomeView() {
    return (
        <div>
            <ViewContainer>
            <Balance />
                <GoToReportsBtn />
                </ViewContainer>
            <IncomePage />
        </div>
    );
}
    
        
    
                
           
      
        

    
    


