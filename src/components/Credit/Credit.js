import React from 'react';
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
import CreditItem from './CreditItem';
import Summary from '../Summary';

const Credit = () => (
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
                    <CreditItem />
                    <CreditItem />
                    <CreditItem/>
                </Container2>
                <Summary/>
            </Box>
            
        </Container>
    </div>
    
);

export default Credit;