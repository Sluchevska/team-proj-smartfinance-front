import React from 'react';
import {Wrapper, Container, StyledLink} from './BalanceBar.styled';

const BalanceBar = () => (
    <Wrapper>
        <Container>
            <StyledLink to="/debit">Доход</StyledLink>
            <StyledLink to="/credit">Расход</StyledLink>
        </Container>
    </Wrapper>
)

export default BalanceBar;