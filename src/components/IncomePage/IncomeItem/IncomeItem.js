import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Container,
    WrapperInfo,
    WrapperSum,
    Name,
    NameInfo,
    Date,
    Type,
    Sum,
    Wrapper
} from './IncomItem.styled';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

function IncomeItem({ transactions }) {
    const matches = useMediaQuery('(min-width:768px)');
    if (matches === true) {
        return (
                <Wrapper>
                    <Date >{transactions.date}</Date>
                    <Name >{transactions.name}</Name>
                    <Type >{transactions.type}</Type>
                    <Sum >-{transactions.sum}.00 грн</Sum>
                    <IconButton onClick={() => console.log('Pressed')}>
                        {<DeleteIcon width="18" height="18" fill="black" />}
                    </IconButton>
                </Wrapper>
            )
    } else return (
         <Container>
            <WrapperInfo>
                <Name>{transactions.name}</Name>
                <NameInfo>
                    <Date>{transactions.date}</Date>
                    <Type>{transactions.type}</Type>
                </NameInfo>
            </WrapperInfo>
            <WrapperSum>
                <Sum>{transactions.sum}</Sum>
                <IconButton onClick={() => console.log('Pressed')}>
                    {<DeleteIcon width="18" height="18" fill="black" />}
                </IconButton>
            </WrapperSum>
        </Container> 
    )
}

export default IncomeItem;

