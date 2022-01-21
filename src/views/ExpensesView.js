import React from 'react';
import Balance from '../components/Balance/Balance.jsx';
import { ViewContainer } from '../components/Balance/Balance.styled.js';
import ExpensesPage from '../components/ExpensesPage';
import GoToReportsBtn from '../components/GoToReportsBtn/GoToReportsBtn.js';

export default function ExpensesView() {
    return (
        <div>
            <ViewContainer>
            <Balance />
                <GoToReportsBtn />
                </ViewContainer>
            <ExpensesPage />
            
        </div>
    );
}
    
        
    
                
           
      
        

    
    


