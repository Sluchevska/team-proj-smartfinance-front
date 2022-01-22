import React from 'react';
import PropTypes from 'prop-types';
import s from './Icon.module.css';
import icons from './Icons';

export default function Icon({ category, id, sum, onButton}) {
    const Icon = icons[id];
  return (
    <div className={s.item}>
        <p className={s.sum}>{sum}.00</p>
        <button className={s.button} onClick={() => onButton(category)}>
          <Icon className={s.icon} width="56" height="56"/>
        </button>
        <p className={s.category}>{category}</p>
    </div>
  );
}

Icon.propTypes = {
  category: PropTypes.string,
  sum: PropTypes.number
};