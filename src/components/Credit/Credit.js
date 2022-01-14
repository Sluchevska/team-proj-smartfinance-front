import React from 'react';
// import Container from './Container';
import { Container, Header } from './Credit.styled';
import CreditItem from './CreditItem';

const Credit = () => (
    <div>
        <Container>
            <Header/>
            <CreditItem />
            <CreditItem />
            <CreditItem/>
        </Container>
    </div>
    
);

export default Credit;