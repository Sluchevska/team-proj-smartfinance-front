import React from 'react';
// import Container from './Container';
import {
    Box,
    Container,
    Container2,
    Header
} from './Credit.styled';
import CreditItem from './CreditItem';

const Credit = () => (
    <div>
        <Container>
            <Box>
                <Container2>
                    <Header/>
                    <CreditItem />
                    <CreditItem />
                    <CreditItem/>
                </Container2>
            </Box>
        </Container>
    </div>
    
);

export default Credit;