import {IconLeft,IconRigth, IconContainer, Container, Title, Month} from './SwitchMonthArrow.styled'
import months from './month'

const SwitchMonthArrow = ({month, year, onHandleClickLeft, onHandleClickRight}) => {
    const currentMonth = months.find(item => item.id === month);
    return (
    <Container>
        <Title>Текущий период:</Title>
        <IconContainer>
        <IconLeft onClick={onHandleClickLeft}></IconLeft>
        <Month>{currentMonth.name} {year}</Month>
        <IconRigth onClick={onHandleClickRight}></IconRigth>
        </IconContainer>

    </Container>
    )
}

export default SwitchMonthArrow;