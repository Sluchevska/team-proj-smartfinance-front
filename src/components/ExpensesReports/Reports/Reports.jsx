import ReportsList from '../ReportsList/ReportsList'
import {useState} from 'react';
import {useSelector} from 'react-redux';
// import s from './Reports.module.css';
import Icon from "../Reports/Icons/Icon"
import TotalExpence from '../TotalExpense/TotalExpense'
import { transactionsSelectors } from "../../../redux/transactions-month";
import {IconLeft,IconRigth, IconContainer, IconList, Title, ContainerMain } from './Reports.styled';


const Reports = () => {

    //   const operations = useSelector(getOperations);
    // const onButton = useSelector(transactionsSelectors.getDescriptionExpenses);
    const expenses = useSelector(transactionsSelectors.getCategoryExpenses);
 const income = useSelector(transactionsSelectors.getCategoryIncome);
    const [data, setData] = useState(expenses);
const[title, setTitle] =useState('Расходы');
    
    const onHandleIncomeClick = () => {
      setData(expenses);
      setTitle("Расходы")
    }

     const onHandleExpensesClick = () => {
      setData(income);
      setTitle("Доходы")

    }
    const totalExpense = useSelector(transactionsSelectors.getTotalExpense);  

      return(
<>
                <TotalExpence totalExpense={totalExpense} /> 


        <ContainerMain>
        <IconContainer>
 
 <IconLeft onClick={onHandleIncomeClick}></IconLeft>
  <Title>{title}</Title>
 <IconRigth onClick={onHandleExpensesClick}></IconRigth>

 </IconContainer>
        <IconList>
      
        {
          data
            .map((el, index) => (
              <li key={index}>
                <Icon id={index} category={el.category} sum={el.total} />
              </li>
            ))}
      </IconList>
      </ContainerMain>
    </>
      );
    };



   



export default Reports;