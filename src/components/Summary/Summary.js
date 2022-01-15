import React from 'react';
import PropTypes from 'prop-types';
// import Container from './Container';
import {
    Wrapper,
    Title,
    List,
    ListItem,
    Month,
    Sum
} from './Summary.styled';

const Summary = ({data}) => (
        <Wrapper>
            <Title>СВОДКА</Title>
            <List>
                {data.map((data)=> (
                <ListItem key={data.id}  >
                    <Month >{data.month}</Month>
                    <Sum >{data.sum}</Sum>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
);

Summary.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default Summary;