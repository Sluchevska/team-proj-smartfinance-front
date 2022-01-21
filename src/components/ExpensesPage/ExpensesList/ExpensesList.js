import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getOperations} from '../../../redux/transoperations/operations-selectors';
import ExpensesItem from '../ExpensesItem';
import {
    List,
    ListItem
} from './ExpensesList.styled';

function ExpensesList() {
    const operations = useSelector(getOperations);
    return(
        <List>
            {operations.map((operations)=> (
                <ListItem key={operations.id}  >
                    <ExpensesItem operations={operations}/>
                </ListItem>
            ))}
        </List>
    )
}

ExpensesList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default ExpensesList;



 