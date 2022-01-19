import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Container,
    WrapperInfo,
    WrapperSum,
    Description,
    NameInfo,
    Date,
    Category,
    Sum,
    Wrapper
} from './ExpensesItem.styled';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

function ExpensesItem({ operations }) {
    const matches = useMediaQuery('(min-width:768px)');
    if (matches === true) {
        return (
                <Wrapper>
                    <Date >{operations.date}</Date>
                    <Description >{operations.description}</Description>
                    <Category >{operations.category}</Category>
                    <Sum >-{operations.sum}.00 грн</Sum>
                    <IconButton onClick={() => console.log('Pressed')}>
                        {<DeleteIcon width="18" height="18" fill="black" />}
                    </IconButton>
                </Wrapper>
            )
    } else return (
         <Container>
            <WrapperInfo>
                <Description>{operations.description}</Description>
                <NameInfo>
                    <Date>{operations.date}</Date>
                    <Category>{operations.category}</Category>
                </NameInfo>
            </WrapperInfo>
            <WrapperSum>
                <Sum>-{operations.sum}.00 грн</Sum>
                <IconButton onClick={() => console.log('Pressed')}>
                    {<DeleteIcon width="18" height="18" fill="black" />}
                </IconButton>
            </WrapperSum>
        </Container> 
    )
}

export default ExpensesItem;

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