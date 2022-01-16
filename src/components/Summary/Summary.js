import React from 'react';
import PropTypes from 'prop-types';

import {
    Wrapper,
    Title,
    List,
    ListItem
} from './Summary.styled';

const Summary = ({data}) => (
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
);

Summary.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default Summary;