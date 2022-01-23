import 'react-datepicker/dist/react-datepicker.css';
import './datePickerStyles.css';

import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DatePicker from 'react-datepicker';
import { buttonGroupStyles } from './buttonStyles';
import calc from '../../../icons/calculator.svg';
import calendar from '../../../icons/calendar.svg';
import expenseCategories from './expenseCategories.json';
import { addOperation } from '../../../redux/transoperations/operations-operations';
import { getSelectedDate } from '../../../redux/transoperations/operations-selectors';
import s from './Transaction.module.css';
import { selectStyles } from './selectStyles';
import * as actions  from '../../../redux/transoperations/operations-action';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Transaction({ categories, isIncome, placeholder, type }) {
  const selectedDate = useSelector(getSelectedDate);
  const [date, setDate] = useState(
    new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day),
  );
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState([]);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const isTablet = useMediaQuery(theme.breakpoints.only('tablet'));
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'sum':
        setSum(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    function pad(n) {
        if (n < 10) return '0' + n;
        return n;
    }

    const dayApi = pad(day);
    const monthApi = pad(month);

    dispatch(
      addOperation({
        date:`${dayApi}.${monthApi}.${year}`,
        category,
        description,
        sum,
        type,
      }),
    );

    //  dispatch(
    //   fetchAddTransaction({
    //     year,
    //     month,
    //     day,
    //     description,
    //     category,
    //     sum,
    //     isIncome,
    //   }),
    // );

    reset();
  };

  const reset = () => {
    setDate(new Date());
    setDescription('');
    setCategory('');
    setSum([]);
  };

  const handleChangeDate = data => {
    dispatch(
      actions.selectDate({
        day: data.getDate(),
        month: data.getMonth() + 1,
        year: data.getFullYear(),
      }),
    );
    setDate(data);
  };

  return (
    <div className={s.container}>
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapInputs}>
        <label className={s.label}>
          <img src={calendar} style={{ marginRight: '10px' }} alt="calendar" />
          <DatePicker
            id="date"
            name="date"
            dateFormat="dd.MM.yyyy"
            selected={date}
            onChange={handleChangeDate}
            maxDate={new Date()}
            required
          />
        </label>

        <input
          className={s.desc}
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
            placeholder={placeholder}
            required
        />
        <FormControl>
          <InputLabel sx={{ fontSize: '12px' }}>Категория</InputLabel>
          <Select
            sx={
              isMobile
                ? {
                    width: '280px',
                    marginBottom: '30px',
                    borderRadius: '0 0 16px 0',
                    border: '2px solid #FFF',
                    fontSize: '12px',
                  }
                : isTablet
                ? {
                    width: '168px',
                    marginBottom: 0,
                    borderRight: 'none',
                    borderRadius: '0',
                    fontSize: '12px',
                  }
                : selectStyles
            }
            id="select"
            name="category"
            value={category}
            onChange={handleChange}
            required
          >
            {categories.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                id={option.value}
                style={{ fontSize: '12px' }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <label className={s.sumWrap}>
          <input
            className={s.sum}
            type="number"
            name="sum"
            value={sum}
            onChange={handleChange}
            placeholder="0.00"
            pattern="^\d{1,3}(\s\d{3})*(\.\d+)?$"
            required
          />
          <img className={s.iconCalc} src={calc} alt="калькулятор" />
        </label>
      </div>

      <ButtonGroup color="secondary" variant="outlined" sx={buttonGroupStyles}>
        <Button type="submit">Ввод</Button>
        <Button type="button" onClick={reset}>
          Очистить
        </Button>
      </ButtonGroup>
      </form>
    </div>
  );
}

Transaction.defaultProps = {
  isIncome: false,
  categories: expenseCategories,
  placeholder: 'Описание расхода',
  selectLabel: 'Категория товара',
};

export default Transaction;