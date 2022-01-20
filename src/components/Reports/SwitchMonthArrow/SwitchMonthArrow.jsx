import {IconLeft,IconRigth, IconContainer, Container, Title, Month} from './SwitchMonthArrow.styled'

const SwitchModalArrow = ({children, onLeftClick, onRightClick}) => {

    return (
    <Container>
        <Title>Текущий период:</Title>
        <IconContainer>
        <IconLeft onClick={onLeftClick}></IconLeft>
        <Month>{children}</Month>
        <IconRigth onClick={onRightClick}></IconRigth>
        </IconContainer>
    </Container>
    )
}

export default SwitchModalArrow;