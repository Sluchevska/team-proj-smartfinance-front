import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import Styles from './DatePicker.module.css';



const DatePickerCustom = () => {
  const [startDate, setStartDate] = useState(new Date());
    return (
      <div className={Styles.container}>
    <div className={Styles.iconDate} />
            <DatePicker
                className={Styles.picker}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd.MM.yyyy"

               
            />
            </div>
  );
};

export default DatePickerCustom;