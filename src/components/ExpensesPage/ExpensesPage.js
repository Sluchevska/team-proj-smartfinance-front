import React, {useEffect, useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

import BalanceBar from '../BalanceBar';
import Transaction from '../TransactionForm/Transaction';
import ExpensesList from './ExpensesList';
import Summary from '../Summary';

import expensesOperations from '../../data/expensesOperations.json';
import data from '../../data/summary.json';
import { fetchOperation } from '../../redux/transoperations/operations-operations';
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

function ExpensesPage() {
    //const [type, setType] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const matches = useMediaQuery('(min-width:768px)');
    const date = useSelector(getSelectedDate);

    useEffect(() => {
        console.log("загрузка при первом входе на страницу")
        if (location.pathname === '/expenses') {
            dispatch(fetchOperation(2022, '01', 15, 'expenses'));
            console.log("код после отработки фетча расходы")
        }
        if (location.pathname === '/income') {
            dispatch(fetchOperation(2022, 1, 15, 'income'));
            console.log("код после отработки фетча")
        }
    }, [date, dispatch]);
    
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    <Transaction />
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