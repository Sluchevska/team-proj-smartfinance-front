import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { getOperations} from '../../../redux/transoperations/operations-selectors';
import OperationsItem from '../OperationsItem';
import {
    List,
    ListItem,
    EmptyRow
} from './OperationsList.styled';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function OperationsList() {
    const operations = useSelector(getOperations);
    const lengthOperations = operations.length;
    

    function createArrayForEmptyRows() {
        const num = 9 - lengthOperations
        let emptyArray = [];
        for (let i = 0; i < num; i++) {
            emptyArray.push('');
        }
        return emptyArray
    }

    const emptyRows = createArrayForEmptyRows();

    return (
        <SimpleBar
            style={{
                maxHeight: 346,
                scrollbarMinSize: 130,
            }}
            autoHide={false}
            scrollbarMinSize={130}>
            
            <List>
                {operations.map((operations)=> (
                    <ListItem key={operations._id}  >
                        <OperationsItem operations={operations}/>
                    </ListItem>
                ))}
                    {emptyRows.map((item)=> (
                    <EmptyRow key={nanoid()} >{item}</EmptyRow>))}
            </List>
            
       </SimpleBar>
    )
}

OperationsList.propTypes = {
    operations: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
        })
    ),
};

export default OperationsList;



 