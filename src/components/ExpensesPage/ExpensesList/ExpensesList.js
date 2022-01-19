import React from 'react';
import PropTypes from 'prop-types';
import ExpensesItem from '../ExpensesItem';
import {
    List,
    ListItem
} from './ExpensesList.styled';

const ExpensesList = ({operations}) => (
    <List>
        {operations.map((operations)=> (
            <ListItem key={operations.id}  >
                <ExpensesItem operations={operations}/>
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

 