import { NavLink } from 'react-router-dom';
import { GoToSvg, GoToText, Container, HolderStyle } from './GoToReports.styled';



const GoToReportsBtn = () => {
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