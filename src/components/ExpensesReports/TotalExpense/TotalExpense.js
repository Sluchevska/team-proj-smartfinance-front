import {
  Container,
  ContainerMain,
  Expense,
  Income,
  Title,
} from './TotalExpense.styled';
import { transactionsSelectors } from '../../../redux/transactions-month';
import { useSelector } from 'react-redux';

const TotalExpence = () => {
  const totalExpense = useSelector(transactionsSelectors.getTotalExpense);

  return (
    <Container>
      <ContainerMain>
        <Title>Расходы:</Title>
        <Income> - {totalExpense.totalIncome}грн</Income>
      </ContainerMain>
      <ContainerMain>
        <Title>Доходы:</Title>
        <Expense> + {totalExpense.totalExpenses} грн</Expense>
      </ContainerMain>
    </Container>
  );
};

export default TotalExpence;
