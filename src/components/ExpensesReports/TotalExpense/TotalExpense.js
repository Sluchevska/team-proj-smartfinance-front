import {Container, ContainerMain,Expense, Income, Title } from "./TotalExpense.styled";

const TotalExpence = ()=> {
return (
    <Container>
        <ContainerMain>
            <Title>Расходы:</Title>
            <Income> - 1200 грн</Income>
        </ContainerMain>
        <ContainerMain>
            <Title>Доходы:</Title>
            <Expense> + 400 грн</Expense>
        </ContainerMain>
    </Container>
)
}

export default TotalExpence;