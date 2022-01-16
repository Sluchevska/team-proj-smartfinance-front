import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authOperations, authSelectors } from '../../redux/auth';
import RegMod from './RegMod';

export const VerifyEmail = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  const messageSent = useSelector(authSelectors.getMessageEmailVerify);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    messageSent && setModal(true);
  }, [messageSent]);

  const handleClick = () => {
    dispatch(authOperations.fetchVerifyEmail({ email: userEmail }));
  };

  const closeModal = () => {
    setModal(false);
    dispatch(authActions.repeatEmailVerifyOk);
  };

  return (
    <>
      <p
        type="button"
        onClick={handleClick}
      >{`Отправить повторное письмо на ${userEmail}`}</p>
      {modal && (
        <RegMod
          modalTitle={`${messageSent}`}
          modalButtonleft={'ГОТОВО'}
          modalButtonRight={'ВЕРНУТЬСЯ'}
          handleClickLeft={closeModal}
          handleClickRight={closeModal}
          onClose={closeModal}
        />
      )}
    </>
  );
};