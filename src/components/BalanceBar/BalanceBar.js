import React from 'react';
import {Wrapper, Container, StyledLink} from './BalanceBar.styled';

const BalanceBar = () => (
    <Wrapper>
        <Container>
            <StyledLink to="/expenses">Расход</StyledLink>
            <StyledLink to="/income">Доход</StyledLink>  
        </Container>
    </Wrapper>
)

export default BalanceBar;
