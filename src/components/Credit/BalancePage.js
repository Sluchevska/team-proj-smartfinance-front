import React, {useState} from 'react';
// import Container from './Container';
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
} from './BalancePage.styled';
import CreditList from './CreditList';
import Summary from '../Summary';
import BalanceBar from '../BalanceBar';
// import Calendar from '../Calendar';

import transactions from '../../data/transactions.json';
import data from '../../data/summary.json'

function BalancePage() {
// const [transactions, setTransactions] = useState(data);
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
                            <CreditList transactions={transactions}/>
                        </TransactionsWrapper>
                        <Summary data={data}/>
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default BalancePage;