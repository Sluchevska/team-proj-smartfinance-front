import React from 'react';
import PropTypes from 'prop-types';
import IncomeItem from '../IncomeItem';
import {
    List,
    ListItem
} from './IncomeList.styled';

const IncomeList = ({transactions}) => (
    <List>
        {transactions.map((transactions)=> (
            <ListItem key={transactions.id}  >
                <IncomeItem transactions={transactions}/>
            </ListItem>
        ))}
    </List>
)

IncomeList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default IncomeList;

 