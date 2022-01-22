import React, {useEffect, useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

import OperationsBar from './BalanceBar';
import Transaction from '../TransactionForm/Transaction';
import OperationsList from './OperationsList/OperationsList';
import Summary from './Summary';

import incomeCategories from '../TransactionForm/incomeCategories.json'
import data from '../../data/summary.json';
import { fetchOperationExpenses, fetchOperationIncome } from '../../redux/transaction/transactions-operations';
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
} from './OperationsPage.styled';

function OperationsPage() {
    //const [type, setType] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const matches = useMediaQuery('(min-width:768px)');
    const date = useSelector(getSelectedDate);
    console.log(date);

    function pad(n) {
        if (n < 10) return '0' + n;
        return n;
    }

    const dayApi = pad(date.day);
    const monthApi = pad(date.month);

    useEffect(() => {
        console.log("загрузка при первом входе на страницу")
        if (location.pathname === '/expenses') {
            console.log(date.year);
            dispatch(fetchOperationExpenses(date.year, monthApi, dayApi));
            console.log("код после отработки фетча расходы")
        }
        if (location.pathname === '/income') {
            dispatch(fetchOperationIncome(date.year, monthApi, dayApi));
            console.log("код после отработки фетча")
        }
    }, [dispatch, location.pathname, date]);
    
    return (
        <div>
            <OperationsBar />
            <Container>
                <Box>
                    {location.pathname === '/expenses' ?
                        <Transaction type='expenses'/> :
                        <Transaction
                            isIncome={true}
                            categories={incomeCategories}
                            placeholder="Описание дохода"
                            type='income'
                        />}
                    <Wrapper>
                        <OperationsWrapper>
                            {matches === true ? <Header>
                                <Date >ДАТА</Date>
                                <Description >ОПИСАНИЕ</Description>
                                <Category >КАТЕГОРИЯ</Category>
                                <Sum >СУММА</Sum>
                            </Header> : null}
                            <OperationsList  />
                        </OperationsWrapper>
                        <Summary data={data} />
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default OperationsPage;