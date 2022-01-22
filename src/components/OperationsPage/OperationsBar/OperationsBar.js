import React from 'react';
import {Wrapper, Container, StyledLink} from './OperationsBar.styled';

const OperationsBar = () => (
    <div>
        {/* <Container> */}
            <StyledLink to="/expenses">Расход</StyledLink>
            <StyledLink to="/income">Доход</StyledLink>  
        {/* </Container> */}
    </div>
)

export default OperationsBar;
