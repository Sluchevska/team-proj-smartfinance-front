import React from 'react';
import {
    List,
    ListItem
} from './CreditList.styled';

import CreditItem from '../CreditItem';




const CreditList = ({transactions}) => (
    <List>
        {transactions.map((transactions)=> (
            <ListItem key={transactions.id}  >
                <CreditItem transactions={transactions}/>
            </ListItem>
        ))}
    </List>
)

export default CreditList;

 