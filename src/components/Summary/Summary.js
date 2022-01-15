import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Wrapper,
    Title,
    List,
    ListItem
} from './Summary.styled';

function Summary({ data }) {
    const matches = useMediaQuery('(min-width:768px)');
    if (matches === true) {
        return (
             <Wrapper>
            <Title>СВОДКА</Title>
            <List>
                {data.map((data)=> (
                <ListItem key={data.id}  >
                    <p>{data.month}</p>
                    <p>{data.sum}</p>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
        )
    }
    return null;

}
Summary.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default Summary;