import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReturnSvg, Container, ReturnText } from './ReturnHome.styled';

const ReturnHome = () => {
  return(
      <Container>
        <NavLink to="/expenses">
          <ReturnSvg/>
          <ReturnText>Вернуться на главную</ReturnText>
        </NavLink>
    </Container>
  )
}

export default ReturnHome;