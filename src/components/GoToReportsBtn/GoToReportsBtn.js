import { NavLink } from 'react-router-dom';
import {
  GoToSvg,
  GoToText,
  Container,
  HolderStyle,
} from './GoToReports.styled';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions-month';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';

const GoToReportsBtn = () => {
  const dispatch = useDispatch();

  const { year, month } = useSelector(
    transactionsSelectors.getSelectedDate,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(
      transactionsOperations.fetchAllTransactionsByMonth({ month, year }),
    );
  }, [dispatch, month, year]);

  return (
    <Container>
      <NavLink to="/reports">
        <HolderStyle>
          <GoToText>Перейти к отчетам</GoToText>
          <GoToSvg />
        </HolderStyle>
      </NavLink>
    </Container>
  );
};

export default GoToReportsBtn;
