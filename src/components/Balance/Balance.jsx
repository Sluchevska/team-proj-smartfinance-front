import { useEffect, useState } from 'react';
import formatSum from '../../utils/formatSum';
import Modal from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import ModalGetBalance from '../Modal/ModalBalance/ModalGetBalance';
import balanceOperations from '../../redux/balance/balance-operations';
import balanceSelectors from '../../redux/balance/balance-selectors';
// import { getCurrentUser } from '../../redux/auth/auth-operations';
import {
  Title,
  FormInput,
  Button,
  BalanceContainer,
  FormContainer,
  InputContainer,
  BalanceDisplay,
} from './Balance.styled';

const Balance = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(balanceOperations.getUserBalance());
  }, [dispatch]);

  const balanceFromStore = useSelector(balanceSelectors.getBalanceFromState);
  const isGetBalance = useSelector(balanceSelectors.isGetFromState);

  let event = null;
  let balanceFromForm = null;

  const onSubmit = e => {
    e.preventDefault();
    event = e;
    balanceFromForm = e.target.balance.value.split(' ')[0];
  };

  const hendelSubmit = (e, newBalance) => {
    dispatch(balanceOperations.setUserBalance(newBalance));
    e.target.balance.value = '';
    toggleModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  return (
    <BalanceContainer>
      <FormContainer onSubmit={onSubmit}>
        <Title>
          Баланс:
          {!isGetBalance &&
            (balanceFromStore === null ? (
              <>
                <InputContainer>
                  <FormInput
                    name="balance"
                    autocomplete="off"
                    placeholder="00.00 UAH"
                    type="text"
                  ></FormInput>
                  <Button type="submit" onClick={toggleModal}>
                    ПОДТВЕРДИТЬ
                  </Button>
                </InputContainer>
                <ModalGetBalance />
              </>
            ) : (
              <BalanceDisplay>{`${formatSum(
                balanceFromStore,
              )} UAH`}</BalanceDisplay>
            ))}
        </Title>
      </FormContainer>
      {isModalOpen && (
        <Modal
          modalTitle="Вы уверены?"
          modalButtonleft="Да"
          modalButtonRight=" Нет"
          handleClickLeft={() => hendelSubmit(event, balanceFromForm)}
          handleClickRight={toggleModal}
          onClose={toggleModal}
        />
      )}
    </BalanceContainer>
  );
};

export default Balance;
