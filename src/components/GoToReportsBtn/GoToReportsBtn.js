import { NavLink } from 'react-router-dom';
import {
  GoToSvg,
  GoToText,
  Container,
  HolderStyle,
} from './GoToReports.styled';
import { reportsOperations, reportsSelectors } from '../../redux/reports';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';

const GoToReportsBtn = () => {
  const dispatch = useDispatch();

  const { year, month } = useSelector(
    reportsSelectors.getSelectedDate,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(reportsOperations.fetchAllReportsByMonth({ month, year }));
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
