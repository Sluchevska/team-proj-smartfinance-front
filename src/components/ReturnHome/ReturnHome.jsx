import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReturnSvg, Container, ReturnText, ReturnNav } from './ReturnHome.styled';

const ReturnHome = () => {
  return(
    <Container>
    
      <NavLink to="/expenses">
          <ReturnNav>
          <ReturnSvg/>
          <ReturnText>Вернуться на главную</ReturnText>
          </ReturnNav>
        </NavLink>
        
    </Container>
  )
}

export default ReturnHome;