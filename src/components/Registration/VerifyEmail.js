import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register,
  verifyEmail,
  logOut,
  logIn,
  getCurrentUser,
  refresh,
  uploadAvatar, } from '../../redux/auth/auth-operations';
import { getIsAuthenticated,
  getUserName,
  getUserEmail,
  getMessageEmailVerify,
  getFetchigCurrentUser,
  getCurrentToken,
  getUserAvatar,
  getAuthError,
} from '../../redux/auth/auth-selectors';
  import { repeatEmailVerifyRequest,
  repeatEmailVerifySuccess,
  repeatEmailVerifyOk,
  repeatEmailVerifyError, } from '../../redux/auth/auth-actions';

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