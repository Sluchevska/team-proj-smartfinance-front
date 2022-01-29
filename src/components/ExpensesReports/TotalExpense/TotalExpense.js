import {
  Container,
  ContainerMain,
  Expense,
  Income,
  Title,
} from './TotalExpense.styled';
import { reportsSelectors } from '../../../redux/reports';
import { useSelector } from 'react-redux';
import formatSum from '../../../utils/formatSum';

const TotalExpence = () => {
  const totalExpense = useSelector(reportsSelectors.getTotalExpense);

  return (
    <Container>
      <ContainerMain>
        <Title>Расходы:</Title>
        {totalExpense.totalExpenses === null ? (
          <Expense> 0.00 грн </Expense>
        ) : (
          <Expense> - {formatSum(totalExpense.totalExpenses)} грн</Expense>
        )}
      </ContainerMain>
      <ContainerMain>
        <Title>Доходы:</Title>

        {totalExpense.totalIncome === null ? (
          <Income> 0.00 грн </Income>
        ) : (
          <Income> + {formatSum(totalExpense.totalIncome)} грн</Income>
        )}
      </ContainerMain>
    </Container>
  );
};

export default TotalExpence;
