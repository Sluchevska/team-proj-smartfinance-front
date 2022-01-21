import { useSelector } from 'react-redux';
import { ModalWindow, ModalTitle, ModalText } from './ModalGetBalance.styled';

function ModalGetBalance() {
  const isBalans = useSelector(state => state.auth.user.balance);
  const showModalBalance = isBalans === null ? true : false;
  return (
    showModalBalance && (
      <ModalWindow>
        <ModalTitle>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </ModalTitle>
        <ModalText>Ты не можешь тратить деньги пока их у тебя нет :)</ModalText>
      </ModalWindow>
    )
  );
}

export default ModalGetBalance;
