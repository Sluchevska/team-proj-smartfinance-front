import { NavLink } from 'react-router-dom';
import { GoToSvg, GoToText } from './GoToReports.styled';



const GoToReportsBtn = () => {
  return (
    <div>
      <NavLink to="/reports">
        <GoToText>Перейти к отчетам</GoToText>
        <GoToSvg/>
        </NavLink>
    </div>
  );
};

export default GoToReportsBtn;