import { NavLink } from 'react-router-dom';
import { GoToSvg, GoToText, Container } from './GoToReports.styled';



const GoToReportsBtn = () => {
  return (
    <Container>
      <NavLink to="/reports">
        <GoToText>Перейти к отчетам</GoToText>
        <GoToSvg/>
        </NavLink>
    </Container>
  );
};

export default GoToReportsBtn;