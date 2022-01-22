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
                {location.pathname === '/expenses' ? <MinusSum>-{operations.sum} грн</MinusSum> :<PlusSum>{operations.sum} грн</PlusSum>}
                <IconButton onClick={() => console.log('Pressed')}>
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
                    {location.pathname === '/income' ? <MinusSum>-{operations.sum} грн</MinusSum> :<PlusSum>{operations.sum} грн</PlusSum>}
                    <IconButton onClick={() => console.log('Pressed')}>
                        {<DeleteIcon width="18" height="18" fill="black" onClick={() => dispatch(deleteOperation(operations._id))} />}
                    </IconButton>
                </WrapperSum>
            </Container>
        )
}

export default OperationsItem;

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

        //function CreditItem ({ operations }) {
    // const dispatch = useDispatch();
// return (
//     <div >
//         <p >
//             <span >{operations.date}</span>
//             <span >{operations.name}</span>
//             <span >{operations.type}</span>
//             <span >{operations.sum}</span>
//         </p>
//         <DeleteIcon width="40" height="40" fill = "black"/>
//     </div>
// )
    
// }

//  if (matches === true)