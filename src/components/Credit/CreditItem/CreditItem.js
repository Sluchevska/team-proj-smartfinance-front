import React, {useState, useEffect} from 'react';
import {
    Container,
    WrapperInfo,
    WrapperSum,
    Name,
    NameInfo,
    Date,
    Type,
    Sum,
    Transaction,
    Wrapper
} from './CreditItem.styled';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';


import data from '../../../data/data.json';

// import { useDispatch } from 'react-redux';
// import * as actions from '../../redux/contacts/contacts-action';



function CreditItem ({ transactions }) {
    // const dispatch = useDispatch();
return (
    // <Container >
        <Wrapper>
            <Date >13.01.22</Date>
            <Name >Метро</Name>
            <Type >Транспорт</Type>
            <Sum >100000</Sum>
            <DeleteIcon width="36" height="18" fill="black" />
        </Wrapper>
    // </Container> 
)
    
}

export default CreditItem;

//вариант мобилки
/* <Container>
            <WrapperInfo>
                <Name>Метро</Name>
                <NameInfo>
                    <Date>13.01.22</Date>
                    <Type>Транспорт</Type>
                </NameInfo>
            </WrapperInfo>
            <WrapperSum>
                <Sum>-10</Sum>
                <DeleteIcon width="18" height="18" fill="black" />
            </WrapperSum>
        
            {/* <IconButton onClick={onSubmit}>
                <DeleteIcon onClick={onSubmit} width="40" height="40" fill = "black"/>
        </IconButton> */
        // </Container> */}

        //<button onClick={() => dispatch(actions.deleteContact(contacts.id))}>Delete</button>

        //function CreditItem ({ transactions }) {
    // const dispatch = useDispatch();
// return (
//     <div >
//         <p >
//             <span >{transactions.date}</span>
//             <span >{transactions.name}</span>
//             <span >{transactions.type}</span>
//             <span >{transactions.sum}</span>
//         </p>
//         <DeleteIcon width="40" height="40" fill = "black"/>
//     </div> 
// )
    
// }