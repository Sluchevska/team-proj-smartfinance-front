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
} from './CreditPage.styled';
import BalanceBar from '../BalanceBar';
import Calendar from '../Calendar';
import CreditList from './CreditList';
import Summary from '../Summary';


import creditTransactions from '../../data/creditTransactions.json';
import data from '../../data/summary.json'

function CreditPage() {
    const matches = useMediaQuery('(min-width:768px)');
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    <div>
                        <Calendar />


                    </div>
                    <Wrapper>
                        <TransactionsWrapper>
                            {matches===true? <Header>
                                <Date >ДАТА</Date>
                                <Name >ОПИСАНИЕ</Name>
                                <Type >КАТЕГОРИЯ</Type>
                                <Sum >СУММА</Sum>
                            </Header>: null}
                            <CreditList transactions={creditTransactions}/>
                            {/* </Header>
                            <CreditList transactions={creditTransactions} /> */}
                        </TransactionsWrapper>
                        <Summary data={data} />
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default CreditPage;