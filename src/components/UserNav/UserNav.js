import React, { useState } from 'react';
import defaultAvatar from '../../icons/avatarDef.png';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations.js';
import {
  getIsAuthenticated,
  getUserName,
} from '../../redux/auth/auth-selectors.js';
import {
  ContainerHeader,
  UserInfo,
  UserName,
  Button,
  LogoutP,
  AvatarUser,
  Line,
  LogoutSvg,
  Logo,
} from '../../views/HeaderView/HeaderView.styled.js';

import Modal from '../Modal/Modal.jsx';

export default function UserNav() {

  const name = useSelector(getUserName) || '';
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const logoutModal = () => {
    dispatch(logOut());
    toggleModal();
  };

  const [setModalOpen, setShowModal] = useState(false);

  return (
    
    
   
        <UserInfo>
          <AvatarUser>
            <img src={defaultAvatar} alt="Default Avatar" width="32" />
          </AvatarUser>
          <UserName>{name}</UserName>
          <Line> </Line>

          <Button type="button" onClick={() => toggleModal()}>
            <LogoutP>Выйти</LogoutP>
          </Button>
          <Button type="button" onClick={() => toggleModal()}>
            <LogoutSvg />
         </Button>

          {setModalOpen && (
            <Modal
              modalTitle="Вы действительно хотите выйти?"
              modalButtonleft="Да"
              modalButtonRight=" Нет"
              handleClickLeft={logoutModal}
              handleClickRight={toggleModal}
              onClose={toggleModal}
            />
          )}
        </UserInfo>
   

  );
}
