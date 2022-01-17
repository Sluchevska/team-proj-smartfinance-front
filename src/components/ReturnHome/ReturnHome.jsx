import React from 'react';
import { Link } from 'react-router-dom';

import s from './ReturnHome.module.css';

const ReturnHome = () => {
  return(
      <div className={s.container}>
        <Link to="/expenses">
          <svg className={s.cursor} width="10" height="16">
          </svg>
          <p className={s.text}>Вернуться на главную</p>
        </Link>
    </div>
  )
}

export default ReturnHome;