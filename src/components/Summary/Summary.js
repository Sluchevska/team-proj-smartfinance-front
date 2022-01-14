import React from 'react';
// import Container from './Container';
import {
    Wrapper,
    Title,
    List,
    ListItem,
    Month,
    Sum
} from './Summary.styled';


const Summary = () => (
        <Wrapper>
            <Title>СВОДКА</Title>
            <List>
                <ListItem >
                    <Month >НОЯБРЬ</Month>
                    <Sum >10000</Sum>
                </ListItem>
                <ListItem >
                    <Month >НОЯБРЬ</Month>
                    <Sum >10000</Sum>
                </ListItem>
                <ListItem >
                    <Month >НОЯБРЬ</Month>
                    <Sum >10000</Sum>
                </ListItem>
                <ListItem >
                    <Month >НОЯБРЬ</Month>
                    <Sum >10000</Sum>
                </ListItem>
                <ListItem >
                    <Month >НОЯБРЬ</Month>
                    <Sum >10000</Sum>
                </ListItem>
                <ListItem >
                    <Month >НОЯБРЬ</Month>
                    <Sum >10000</Sum>
                </ListItem>
            </List>
        </Wrapper>
);

export default Summary;