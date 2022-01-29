import { useSelector, useDispatch } from 'react-redux';
import Icon from '../Icon/Icon';
import { useState } from 'react';

import {
  IconLeft,
  IconRigth,
  IconContainer,
  IconList,
  Title,
  ContainerMain,
  IconBorder,
} from './ReportsList.styled';

import { reportsSelectors, reportsActions } from '../../../redux/reports';
import categories from '../../../data/categories.json';

function ReportsList() {
  const dispatch = useDispatch();
  const expenses = useSelector(reportsSelectors.getCategoryExpenses);
  const income = useSelector(reportsSelectors.getCategoryIncome);

  const [title, setTitle] = useState('Расходы');
  const type = useSelector(reportsSelectors.getType);

  function dataFilteredType(type) {
    if (type === 'expenses') {
      return expenses;
    }
    if (type === 'income') {
      return income;
    }
  }

  const data = [...dataFilteredType(type)];
  const categoriesList = categories.filter(el => el.type === type);

  const categoriesSums = (operations, categories) => {
    for (let i = 0; i < categories.length; i++) {
      const el = categories[i];
      operations.map(operation => {
        if (operation.category === el.category) {
          el.sum = operation.total;
        }
      });
    }
  };
  categoriesSums(data, categoriesList);

  const onHandleChangeTypeClick = () => {
    if (type === 'expenses') {
      setTitle('Доходы');
      dispatch(reportsActions.changeType('income'));
      dispatch(reportsActions.changeCategory('ЗП'));
    }
    if (type === 'income') {
      setTitle('Расходы');
      dispatch(reportsActions.changeType('expenses'));
      dispatch(reportsActions.changeCategory('Продукты'));
    }
  };

  return (
    <div>
      <ContainerMain>
        <IconContainer>
          <IconLeft onClick={onHandleChangeTypeClick}></IconLeft>
          <Title>{title}</Title>
          <IconRigth onClick={onHandleChangeTypeClick}></IconRigth>
        </IconContainer>
        <IconList>
          {categoriesList.map(({ category, sum, id }) => (
            <IconBorder key={id}>
              <Icon id={id} category={category} sum={sum} />
            </IconBorder>
          ))}
        </IconList>
      </ContainerMain>
    </div>
  );
}

export default ReportsList;
