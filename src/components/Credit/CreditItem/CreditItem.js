import React from 'react';
import { Container, Wrapper, Name, NameInfo, Date, Type, Sum } from './CreditItem.styled';
// import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

const CreditItem = () => (
    <Container>
        <Wrapper>
            <Name>Метро</Name>
            <NameInfo>
                <Date>13.01.22</Date>
                <Type>Транспорт</Type>
            </NameInfo>
        </Wrapper>
        <Sum>-10</Sum>
        {/* <IconButton onClick={onSubmit}>
                <SearchIcon width="40" height="40" fill = "black"/>
        </IconButton> */}
    </Container>
    
);

export default CreditItem;