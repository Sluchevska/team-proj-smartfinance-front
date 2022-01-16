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
} from './CreditPage.styled';
import BalanceBar from '../BalanceBar';
// import Calendar from '../Calendar';
import CreditInputs from '../CreditPage/CreditInputs';

import CreditList from './CreditList';
import Summary from '../Summary';

import creditTransactions from '../../data/creditTransactions.json';
import data from '../../data/summary.json'

function CreditPage() {
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    <div>
                        <CreditInputs />

                    </div>
                    <Wrapper>
                        <TransactionsWrapper>
                            <Header>
                                <Date >ДАТА</Date>
                                <Name >ОПИСАНИЕ</Name>
                                <Type >КАТЕГОРИЯ</Type>
                                <Sum >СУММА</Sum>
                            </Header>
                            <CreditList transactions={creditTransactions} />
                        </TransactionsWrapper>
                        <Summary data={data} />
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default CreditPage;