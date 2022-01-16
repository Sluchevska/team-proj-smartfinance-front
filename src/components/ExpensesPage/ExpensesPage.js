import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Box,
    Container,
    OperationsWrapper,
    Header,
    Name,
    Date,
    Type,
    Sum,
    Wrapper
} from './ExpensesPage.styled';
import BalanceBar from '../BalanceBar';
import Calendar from '../Calendar';
// import ExpensesInputs from './ExpensesInputs';
import ExpensesList from './ExpensesList';
import Summary from '../Summary';

import expensesOperations from '../../data/expensesOperations.json';
import data from '../../data/summary.json'

function ExpensesPage() {
    const matches = useMediaQuery('(min-width:768px)');
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    <div>
                        <Calendar />
                        {/* <ExpensesInputs /> */}
                    </div>
                    <Wrapper>
                        <OperationsWrapper>
                            {matches === true ? <Header>
                                <Date >ДАТА</Date>
                                <Name >ОПИСАНИЕ</Name>
                                <Type >КАТЕГОРИЯ</Type>
                                <Sum >СУММА</Sum>
                            </Header> : null}
                            <ExpensesList transactions={expensesOperations} />
                        </OperationsWrapper>
                        <Summary data={data} />
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default ExpensesPage;