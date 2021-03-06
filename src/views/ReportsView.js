import React from 'react';
import { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { reportsOperations, reportsSelectors } from '../redux/reports';
import ReturnHome from '../components/ReturnHome/ReturnHome.jsx';
import Balance from '../components/Balance/Balance.jsx';
import SwitchMonthArrow from '../components/ExpensesReports/SwitchMonthArrow/SwitchMonthArrow';
import TotalExpence from '../components/ExpensesReports/TotalExpense/TotalExpense';
import Charts from '../components/Charts/Charts';
import ReportsList from '../components/ExpensesReports/ReportsList/ReportsList';
import {
  MainContainer,
  ReportsContainer,
} from '../components/ExpensesReports/ReportsView.styled';
import { BottomKapusta } from '../components/Charts/Charts.styled';

export default function ReportsView() {
  const dispatch = useDispatch();

  const { year: selectedYear, month: selectedMonth } = useSelector(
    reportsSelectors.getSelectedDate,
    shallowEqual,
  );

  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);

  useEffect(() => {
    dispatch(reportsOperations.fetchAllReportsByMonth({ month, year }));
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
      <ReportsContainer>
        <ReturnHome />
        <Balance />
        <SwitchMonthArrow
          year={year}
          month={month}
          onHandleClickLeft={onHandleClickLeft}
          onHandleClickRight={onHandleClickRight}
        />
      </ReportsContainer>
      <MainContainer>
        <TotalExpence />
        <ReportsList />
        <Charts />
      </MainContainer>
      <BottomKapusta />
    </>
  );
}
