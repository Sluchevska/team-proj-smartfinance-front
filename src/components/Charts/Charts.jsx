import s from './Charts.module.css';
import MobileCharts from './MobileCharts';
import VerticalCharts from './VerticalCharts';
import { useSelector } from 'react-redux';

import {
  getCategory,
  getType,
  getDescriptionExpenses,
  getDescriptionIncome,
} from '../../redux/transactions-month/transaction-selectors';

const Charts = () => {
  const category = useSelector(getCategory);
  const type = useSelector(getType);

  const expenses = useSelector(getDescriptionExpenses);
  const income = useSelector(getDescriptionIncome);

  function dataFilteredType(type) {
    if (type === 'expenses') {
      return expenses;
    }
    if (type === 'income') {
      return income;
    }
  }

  const data = dataFilteredType(type);

  const dataFiltered = data.find(el => el.category === category);

  const chartsData = [...dataFiltered.descriptionData];

  const screenIsMobile = window.screen.width <= 320;
  return (
    <div className={s.container}>
      {screenIsMobile ? (
        <MobileCharts data={chartsData} />
      ) : (
        <VerticalCharts data={chartsData} />
      )}
    </div>
  );
};

export default Charts;
