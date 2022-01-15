import React from 'react';
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

import transactions from '../../data/transactions.json';
import data from '../../data/summary.json'

function BalancePage() {
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
                            <Header>
                                <Date >ДАТА</Date>
                                <Name >ОПИСАНИЕ</Name>
                                <Type >КАТЕГОРИЯ</Type>
                                <Sum >СУММА</Sum>
                            </Header>
                            <DebitList transactions={transactions}/>
                        </TransactionsWrapper>
                        <Summary data={data}/>
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default BalancePage;