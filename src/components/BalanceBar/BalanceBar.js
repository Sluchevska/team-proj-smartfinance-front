import React from 'react';
import {Wrapper, Container, StyledLink} from './BalanceBar.styled';

const BalanceBar = () => (
    <Container>
        <StyledLink to="/credit">Расход</StyledLink>
        <StyledLink to="/debit">Доход</StyledLink>  
    </Container>
)

export default BalanceBar;

//мобильная версия
/* <Wrapper>
        <Container>
            <StyledLink to="/debit">Доход</StyledLink>
            <StyledLink to="/credit">Расход</StyledLink>
        </Container>
    </Wrapper> */