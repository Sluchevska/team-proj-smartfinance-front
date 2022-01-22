import React from 'react';
import {Wrapper, Container, StyledLink} from './OperationsBar.styled';

const OperationsBar = () => (
    <Wrapper>
        <Container>
            <StyledLink to="/expenses">Расход</StyledLink>
            <StyledLink to="/income">Доход</StyledLink>  
        </Container>
    </Wrapper>
)

export default OperationsBar;
