import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getOperations} from '../../../redux/transoperations/operations-selectors';
import OperationsItem from '../OperationsItem';
import {
    List,
    ListItem
} from './OperationsList.styled';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function OperationsList() {
    const operations = useSelector(getOperations);
    return (
        <SimpleBar style={{ maxHeight: 200 }}>
        <List>
            {operations.map((operations)=> (
                <ListItem key={operations._id}  >
                    <OperationsItem operations={operations}/>
                </ListItem>
            ))}
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



 