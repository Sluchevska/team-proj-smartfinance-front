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
    Transaction,
    Wrapper
} from './CreditItem.styled';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

function CreditItem({ transactions }) {
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