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
} from './IncomePage.styled';
import BalanceBar from '../BalanceBar';
import Calendar from '../Calendar';
import IncomeInputs from './IncomeInputs'
import IncomeList from './IncomeList';
import Summary from '../Summary';

import incomeOperations from '../../data/incomeOperations.json';
import data from '../../data/summary.json'

function IncomePage() {
    const matches = useMediaQuery('(min-width:768px)');
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    <div>
                        <Calendar />
                        <IncomeInputs />
                    </div>
                    <Wrapper>
                        <OperationsWrapper>
                            {matches === true ? <Header>
                                <Date >ДАТА</Date>
                                <Name >ОПИСАНИЕ</Name>
                                <Type >КАТЕГОРИЯ</Type>
                                <Sum >СУММА</Sum>
                            </Header> : null}
                            <IncomeList transactions={incomeOperations} />
                        </OperationsWrapper>
                        <Summary data={data} />
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default IncomePage;