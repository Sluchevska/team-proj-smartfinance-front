import React from 'react';
import Container from './Container';
import {Wrapper, StyledLink} from './BalanceBar.styled';

const BalanceBar = () => (
    <Wrapper>
        <StyledLink to="/debit">Доход</StyledLink>
        <StyledLink to="/credit">Расход</StyledLink>
    </Wrapper>
)

export default BalanceBar;