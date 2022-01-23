import React from 'react';
import { useState, useEffect } from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {transactionsSelectors, transactionsOperations} from '../redux/transactions-month'
import Reports from '../components/ExpensesReports/Reports/Reports';
import Charts from '../components/Charts';
import ReturnHome from '../components/ReturnHome/ReturnHome.jsx'
import Balance from '../components/Balance/Balance.jsx';
import SwitchMonthArrow from '../components/ExpensesReports/SwitchMonthArrow/SwitchMonthArrow';
import TotalExpence from '../components/ExpensesReports/TotalExpense/TotalExpense';
import { totalExpenseRequest } from '../redux/transactions-month/transaction-actions';


export default function ReportsView() {
  const dispatch = useDispatch();
  
  const { year: selectedYear, month: selectedMonth } = useSelector(
    transactionsSelectors.getSelectedDate, shallowEqual
    );

    const [month, setMonth] = useState(selectedMonth);
    const [year, setYear] = useState(selectedYear);
    
  useEffect(() => {
    console.log("загрузка репортсвью")
    dispatch(
      transactionsOperations.fetchAllTransactionsByMonth({ month, year }),
      );
    }, [dispatch, month, year]);

  
// const totalExpense = useSelector(transactionsSelectors.getTotalExpense);  
// const categoryExpenses = useSelector(transactionsSelectors.getCategoryExpenses);
// const categoryIncome = useSelector(transactionsSelectors.getCategoryIncome);
// const descriptionExpenses = useSelector(transactionsSelectors.getDescriptionExpenses);
// const descriptionIncome = useSelector(transactionsSelectors.getDescriptionIncome);


      
  
    const onHandleClickRight = () => {
        if (month < 12) {
          setMonth(prev => (prev += 1));
        } else {
          setMonth(1);
          setYear(prev => (prev += 1));
        }
       
      };
      const onHandleClickLeft = () => {
        if (month <= 1) {
          setMonth(12);
          setYear(prev => (prev -= 1));
        } else {
          setMonth(prev => (prev -= 1));
        }
      
      };
    return (

      
        <>
        <ReturnHome />
        <Balance/>

            <SwitchMonthArrow  year={year}
                month={month} onHandleClickLeft={onHandleClickLeft}
                onHandleClickRight={onHandleClickRight}/>
                {/* <TotalExpence totalExpense={totalExpense} /> */}
            <Reports />
                
            </> 
    )
}
    
        
    
                
           
      
        

    
    


