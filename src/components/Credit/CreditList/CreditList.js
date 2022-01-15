import React from 'react';
import PropTypes from 'prop-types';
import CreditItem from '../CreditItem';
import {
    List,
    ListItem
} from './CreditList.styled';

const CreditList = ({transactions}) => (
    <List>
        {transactions.map((transactions)=> (
            <ListItem key={transactions.id}  >
                <CreditItem transactions={transactions}/>
            </ListItem>
        ))}
    </List>
)

CreditList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default CreditList;

 