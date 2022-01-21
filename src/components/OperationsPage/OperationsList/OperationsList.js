import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getOperations} from '../../../redux/transoperations/operations-selectors';
import OperationsItem from '../OperationsItem';
import {
    List,
    ListItem
} from './OperationsList.styled';

function OperationsList() {
    const operations = useSelector(getOperations);
    // console.log("какие операции заходят в отрисовку",operations)
    return(
        <List>
            {operations.map((operations)=> (
                <ListItem key={operations._id}  >
                    <OperationsItem operations={operations}/>
                </ListItem>
            ))}
        </List>
    )
}

OperationsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default OperationsList;



 