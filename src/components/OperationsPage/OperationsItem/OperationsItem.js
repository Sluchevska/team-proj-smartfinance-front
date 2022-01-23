import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteOperation } from '../../../redux/transoperations/operations-operations';

import {
    Container,
    WrapperInfo,
    WrapperSum,
    Description,
    NameInfo,
    Date,
    Category,
    PlusSum,
    MinusSum,
    Wrapper
} from './OperationsItem.styled';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

function OperationsItem({ operations }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const matches = useMediaQuery('(min-width:768px)');
    if (matches === true) {
        return (
            <Wrapper>
                <Date >{operations.date}</Date>
                <Description >{operations.description}</Description>
                <Category >{operations.category}</Category>
                {location.pathname === '/expenses' ? <MinusSum>-{operations.sum.toFixed(2)} грн</MinusSum> :<PlusSum>{operations.sum.toFixed(2)} грн</PlusSum>}
                <IconButton>
                    {<DeleteIcon width="18" height="18" fill="black" onClick={() => dispatch(deleteOperation(operations._id))} />}
                </IconButton>
            </Wrapper>
        )
    }
    else return (
            <Container>
                <WrapperInfo>
                    <Description>{operations.description}</Description>
                    <NameInfo>
                        <Date>{operations.date}</Date>
                        <Category>{operations.category}</Category>
                    </NameInfo>
                </WrapperInfo>
                <WrapperSum>
                {location.pathname === '/income' ? <PlusSum>{operations.sum.toFixed(2)} грн</PlusSum> : <MinusSum>-{operations.sum.toFixed(2)} грн</MinusSum>}
                    <IconButton>
                        {<DeleteIcon width="18" height="18" fill="black" onClick={() => dispatch(deleteOperation(operations._id))} />}
                    </IconButton>
                </WrapperSum>
            </Container>
        )
}

export default OperationsItem;

//parseInt(sum, 10).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')