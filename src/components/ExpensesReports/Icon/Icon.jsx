import React from 'react';
import PropTypes from 'prop-types';
import s from './Icon.module.css';
import icons from './Icons';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../../redux/transactions-month/transaction-actions';

export default function Icon({ category, sum, id }) {
  const dispatch = useDispatch();
  const Icon = icons[id];

const onIconClick = (category) => {
  dispatch(changeCategory(category));
  // s.button.style.setProperty('#ff751d', active);
  // s.icon.style.setProperty('#ff751d', fill);
}

  return (
    <div className={s.item}>
      <p className={s.sum}>{sum}</p>
      <button
        className={s.button}
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
