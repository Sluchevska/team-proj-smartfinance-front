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

import data from '../../data/data.json'

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
                        <CreditList transactions={data}/>
                    </Container2>
                    <Summary />
                </Box>
            
            </Container>
        </div>
    );
}

export default Credit;