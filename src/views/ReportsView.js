import React from 'react';
import { useState, useEffect } from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {transactionsSelectors, transactionsOperations} from '../redux/transactions-month'
import Reports from '../components/Reports';
import Charts from '../components/Charts';
import ReturnHome from '../components/ReturnHome/ReturnHome.jsx'
import SwitchMonthArrow from '../components/ExpensesReports/SwitchMonthArrow/SwitchMonthArrow';

export default function ReportsView() {
    const dispatch = useDispatch();

    const { year: selectedYear, month: selectedMonth } = useSelector(
        transactionsSelectors.getSelectedDate, shallowEqual
      );

    const [month, setMonth] = useState(selectedMonth);
    const [year, setYear] = useState(selectedYear);


    useEffect(() => {
        dispatch(
          transactionsOperations.fetchAllTransactionsByMonth({ month, year }),
        );
      }, [dispatch, month, year]);
  
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
            <SwitchMonthArrow  year={year}
                month={month} onHandleClickLeft={onHandleClickLeft}
                onHandleClickRight={onHandleClickRight}/>
                <Reports />
                <Charts/>
                </>
    )
}
    
        
    
                
           
      
        

    
    


