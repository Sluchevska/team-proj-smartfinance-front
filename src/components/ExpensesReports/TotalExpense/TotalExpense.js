import {Container, ContainerMain,Expense, Income, Title } from "./TotalExpense.styled";

const TotalExpence = ({totalExpense})=> {
   console.log("totalExpense", totalExpense) 

const income = totalExpense.find(item => {
    if(item.type === "income"){
        return item;
    }
})

const expenses = totalExpense.find(item => {
    if (item.type === "expenses") {
        return item;
    }
})


return (
    <Container>
        <ContainerMain>
            <Title>Расходы:</Title>
            <Income> - {income.total}грн</Income>
        </ContainerMain>
        <ContainerMain>
            <Title>Доходы:</Title>
            <Expense> + {expenses.total} грн</Expense>
        </ContainerMain>
    </Container>
)
}

export default TotalExpence;