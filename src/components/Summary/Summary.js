import React from 'react';
// import Container from './Container';
import {
    Container,
    Title,
    List,
    ListItem,
    Month,
    Sum
} from './Summary.styled';


const Summary = () => (
    <div>
        <Container>
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
        </Container>
    </div>
    
);

export default Summary;