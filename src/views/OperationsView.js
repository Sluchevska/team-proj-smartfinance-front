import React from 'react';
import Balance from '../components/Balance/Balance.jsx';
import OperationsPage from '../components/OperationsPage';
import { ViewContainer } from '../components/Balance/Balance.styled.js';
import GoToReportsBtn from '../components/GoToReportsBtn/GoToReportsBtn.js';

export default function ExpensesView() {
    return (
        <div>
            <ViewContainer>
                <Balance />
                <GoToReportsBtn />
            </ViewContainer>
            <OperationsPage />
        </div>
    );
}
    
        
    
                
           
      
        

    
    


