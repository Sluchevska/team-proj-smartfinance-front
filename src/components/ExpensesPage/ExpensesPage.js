import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useLocation} from 'react-router-dom';
import {
    Box,
    Container,
    OperationsWrapper,
    Header,
    Description,
    Date,
    Category,
    Sum,
    Wrapper
} from './ExpensesPage.styled';
import BalanceBar from '../BalanceBar';
import Calendar from '../Calendar';

import ButtonInput from '../ButtonInput';
import ButtonDelete from '../ButtonDelete';
// import CreditList from './CreditList';
import ExpensesInputs from './ExpensesInputs';
import ExpensesList from './ExpensesList';
import Summary from '../Summary';

import expensesOperations from '../../data/expensesOperations.json';
import data from '../../data/summary.json'

function ExpensesPage() {
    //     const dispatch = useDispatch();
//   useEffect(() => dispatch(fetchContacts()), [dispatch])
    const location = useLocation();
    const matches = useMediaQuery('(min-width:768px)');
//   const contacts = useSelector(getContacts);
//   
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(contactsOperations.fetchContacts());
//   }, [dispatch]);
    return (
        <div>
            <BalanceBar />
            <Container>
                <Box>
                    <div>
                        <Calendar />
                        <ExpensesInputs />
                        <ButtonInput />
                        <ButtonDelete />
                    </div>
                    <Wrapper>
                        <OperationsWrapper>
                            {matches === true ? <Header>
                                <Date >ДАТА</Date>
                                <Description >ОПИСАНИЕ</Description>
                                <Category >КАТЕГОРИЯ</Category>
                                <Sum >СУММА</Sum>
                            </Header> : null}
                            <ExpensesList operations={expensesOperations} />
                        </OperationsWrapper>
                        <Summary data={data} />
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default ExpensesPage;