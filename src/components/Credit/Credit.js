import React, {useState} from 'react';
// import Container from './Container';
import {
    Box,
    Container,
    Container2,
    Header,
    Name,
    Date,
    Type,
    Sum
} from './Credit.styled';
import CreditList from './CreditList';
import Summary from '../Summary';

import transactions from '../../data/transactions.json';
import data from '../../data/summary.json'

function Credit() {
// const [transactions, setTransactions] = useState(data);
    return (
        <div>
            <Container>
                <Box>
                    <Container2>
                        <Header>
                            <Date >ДАТА</Date>
                            <Name >ОПИСАНИЕ</Name>
                            <Type >КАТЕГОРИЯ</Type>
                            <Sum >СУММА</Sum>
                        </Header>
                        <CreditList transactions={transactions}/>
                    </Container2>
                    <Summary data={data}/>
                </Box>
            </Container>
        </div>
    );
}

export default Credit;