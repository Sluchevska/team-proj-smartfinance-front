import React from 'react';
import PropTypes from 'prop-types';
import s from './Icon.module.css';
import icons from './Icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, changeActive } from '../../../redux/transactions-month/transaction-actions';
import { getCategory } from '../../../redux/transactions-month/transaction-selectors';

export default function Icon({ category, sum, id }) {
  const dispatch = useDispatch();
  const Icon = icons[id];
  const active = useSelector(getCategory);
  const isActive = active === category;
const onIconClick = (category) => {
  dispatch(changeCategory(category));
}

  return (
    <div className={s.item}>
      <p className={s.sum}>{sum}</p>
      <button
        className={isActive ? s.active: s.button}
        onClick={() => onIconClick(category)}
      >
        <Icon className={s.icon} width="56" height="56"></Icon>
      </button>
      <p className={s.category}>{category}</p>
    </div>
  );
}

Icon.propTypes = {
  category: PropTypes.string,
  sum: PropTypes.number,
};
