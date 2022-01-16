import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Box,
    Container,
    TransactionsWrapper,
    Header,
    Name,
    Date,
    Type,
    Sum,
    Wrapper
} from './DebitPage.styled';
import BalanceBar from '../BalanceBar';
// import Calendar from '../Calendar';
import DebitList from './DebitList';
import Summary from '../Summary';

import DebitTransactions from '../../data/debitTransactions.json';
import data from '../../data/summary.json'

function DebitPage() {
    const matches = useMediaQuery('(min-width:768px)');
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    <div>
                        {/* <Calendar /> */}
                        Календарь Инпут Кнопки
                    </div>
                    <Wrapper>
                        <TransactionsWrapper>
                            {matches===true? <Header>
                                <Date >ДАТА</Date>
                                <Name >ОПИСАНИЕ</Name>
                                <Type >КАТЕГОРИЯ</Type>
                                <Sum >СУММА</Sum>
                            </Header>: null}
                            <DebitList transactions={DebitTransactions}/>
                        </TransactionsWrapper>
                        <Summary data={data}/>
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default DebitPage;