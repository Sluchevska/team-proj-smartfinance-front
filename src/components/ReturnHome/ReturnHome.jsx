import React from 'react';
import { Link } from 'react-router-dom';

import {  Icon, Title} from './ReturnHome.styled';

const ReturnHome = () => {
  return(
    
      <div>
        <Link to="/expenses">
          <Icon></Icon>
          <Title>Вернуться на главную</Title>
        </Link>
    </div>
  )
}

export default ReturnHome;