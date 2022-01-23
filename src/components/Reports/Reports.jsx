import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOperations, getLoading, fetchByCategoryPeriod } from '../../redux/reports';
import Icon from './Icons';
// import Spinner from '../../Spinner';
import s from './Reports.module.css';
import categories from '../../data/categories.json';
import operations from '../../data/expensesOperations2.json'
const type = "expenses";
const month = 1;
const year = 2022
const categoriesList = categories.filter(category => category.type === type);
const operationsList = operations.filter(operation => operation.type === type);


const Reports = () => {
  const dispatch = useDispatch()
//   const operations = useSelector(getOperations);
const onButton = (month, year, category) => dispatch(fetchByCategoryPeriod(month, year, category));

  const categoriesSums = (operations, categories) => {
    for (let i = 0; i < categories.length; i++) {
      const el = categories[i];
     operations
     .map(operation => {
        if (operation.category === el.category){
          el.sum += operation.sum;
        }
     })
    }
  }
  categoriesSums(operationsList, categoriesList);

//   const isFetching = useSelector(getLoading);
//   useEffect(() => dispatch(fetchByTypePeriod()), [dispatch]);
  return(
    <div className={s.expensesList}>
    <ul className={s.iconList}>
    {/* {isFetching && (
      <div className={s.loader}>
        <Spinner type="Puff" color="#00BFFF" height={50} width={50} timeout={3000} />
      </div>
    )} */}
    {categoriesList &&
      categoriesList
        .map(({ category, sum, icon, id }) => (
          <li key={id}>
            <Icon id={id} category={category} sum={sum} icon={icon} onButton={onButton}/>
          </li>
        ))}
  </ul>
  </div>
  );
};

export default Reports;