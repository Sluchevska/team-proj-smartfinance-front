import React from 'react';
import PropTypes from 'prop-types';
import s from './Icon.module.css';
import icons from './Icons';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../../redux/transactions-month/transaction-actions';

export default function Icon({ category, sum, id }) {
  const dispatch = useDispatch();
  const Icon = icons[id];

  return (
    <div className={s.item}>
      <p className={s.sum}>{sum}</p>
      <button
        className={s.button}
        onClick={() => dispatch(changeCategory(category))}
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
