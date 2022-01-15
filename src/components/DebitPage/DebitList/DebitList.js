import React from 'react';
import PropTypes from 'prop-types';
import CreditItem from '../DebitItem';
import {
    List,
    ListItem
} from './DebitList.styled';

const DebitList = ({transactions}) => (
    <List>
        {transactions.map((transactions)=> (
            <ListItem key={transactions.id}  >
                <CreditItem transactions={transactions}/>
            </ListItem>
        ))}
    </List>
)

DebitList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default DebitList;

 