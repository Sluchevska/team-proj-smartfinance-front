import React, {useEffect} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { getSelectedDate } from '../../redux/transoperations/operations-selectors';
import {
    Box,
    Container,
    OperationsWrapper,
    Header,
    Description,
    Date,
    Category,
    Sum,
    Wrapper
} from './ExpensesPage.styled';
import BalanceBar from '../BalanceBar';
import Transaction from '../TransactionForm/Transaction';
import { fetchOperation } from '../../redux/transoperations/operations-operations';

// import CreditList from './CreditList';

import ExpensesList from './ExpensesList';
import Summary from '../Summary';

import expensesOperations from '../../data/expensesOperations.json';
import data from '../../data/summary.json'

function ExpensesPage() {
    //     const dispatch = useDispatch();
//   useEffect(() => dispatch(fetchContacts()), [dispatch])
    const location = useLocation();
    const matches = useMediaQuery('(min-width:768px)');
    const date = useSelector(getSelectedDate);
//   const contacts = useSelector(getContacts);
//   
  const dispatch = useDispatch();

    useEffect(() => {
    console.log("загрузка при первом входе на страницу")
      dispatch(fetchOperation(2022, 1, 15, 'expenses'));
      console.log("код после отработки фетча")
  }, [date, dispatch]);
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    <div>
                        <Transaction />
                    </div>
                    <Wrapper>
                        <OperationsWrapper>
                            {matches === true ? <Header>
                                <Date >ДАТА</Date>
                                <Description >ОПИСАНИЕ</Description>
                                <Category >КАТЕГОРИЯ</Category>
                                <Sum >СУММА</Sum>
                            </Header> : null}
                            <ExpensesList  />
                        </OperationsWrapper>
                        <Summary data={data} />
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default ExpensesPage;