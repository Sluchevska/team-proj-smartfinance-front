import { useSelector } from 'react-redux';
import balanceSelectors from '../../../redux/balance/balance-selectors';
import { ModalWindow, ModalTitle, ModalText } from './ModalGetBalance.styled';

function ModalGetBalance() {
  const balanceFromStore = useSelector(balanceSelectors.getBalanceFromState);
  const showModalBalance = balanceFromStore === null ? true : false;
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
