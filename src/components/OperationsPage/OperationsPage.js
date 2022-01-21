import React, {useEffect, useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

import BalanceBar from '../BalanceBar';
import Transaction from '../TransactionForm/Transaction';
import OperationsList from './OperationsList';
import Summary from '../Summary';

import incomeCategories from '../TransactionForm/incomeCategories.json'
import data from '../../data/summary.json';
import { fetchOperationExpenses, fetchOperationIncome } from '../../redux/transoperations/operations-operations';
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

    function pad(n) {
        if (n < 10) return '0' + n;
        return n;
    }

    const dayApi = pad(date.day);
    const monthApi = pad(date.month);

    useEffect(() => {
        // console.log("загрузка при первом входе на страницу")
        if (location.pathname === '/expenses') {
            dispatch(fetchOperationExpenses(2022, '01', 15));
            // console.log("код после отработки фетча расходы")
        }
        if (location.pathname === '/income') {
            dispatch(fetchOperationIncome(2022, '01', 15));
            // console.log("код после отработки фетча")
        }
    }, [dispatch, location.pathname, date]);
    
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    {location.pathname === '/expenses' ?
                        <Transaction /> :
                        <Transaction
                            isIncome={true}
                            categories={incomeCategories}
                            placeholder="Описание дохода"
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