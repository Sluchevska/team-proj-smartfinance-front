import React from 'react';
import PropTypes from 'prop-types';
import ExpensesItem from '../ExpensesItem';
import {
    List,
    ListItem
} from './ExpensesList.styled';

const ExpensesList = ({transactions}) => (
    <List>
        {transactions.map((transactions)=> (
            <ListItem key={transactions.id}  >
                <ExpensesItem transactions={transactions}/>
            </ListItem>
        ))}
    </List>
)

ExpensesList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default ExpensesList;

 