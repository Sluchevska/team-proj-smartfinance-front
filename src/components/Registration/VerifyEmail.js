import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../../redux/auth/auth-operations';
import {
  getUserEmail,
  getMessageEmailVerify,
} from '../../redux/auth/auth-selectors';
import { repeatEmailVerifyOk } from '../../redux/auth/auth-actions';

import RegMod from './RegMod';

export const VerifyEmail = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  const messageSent = useSelector(getMessageEmailVerify);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    messageSent && setModal(true);
  }, [messageSent]);

  const handleClick = () => {
    dispatch(verifyEmail({ email: userEmail }));
  };

  const closeModal = () => {
    setModal(false);
    dispatch(repeatEmailVerifyOk);
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
