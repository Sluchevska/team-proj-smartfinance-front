import React, { useState } from 'react';
import defaultAvatar from '../../icons/avatarDef.png';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations.js';
import logoutSvg from "../../icons/logout.svg";
import {
  
  getUserName,
} from '../../redux/auth/auth-selectors.js';
import {
 
  UserInfo,
  UserName,
  Button,
  LogoutP,
  AvatarUser,
  Line,
  LogoutSvg,

} from '../../views/HeaderView/HeaderView.styled.js';

import Modal from '../Modal/Modal.jsx';

export default function UserNav() {

  const userName = useSelector(getUserName) || '';
  console.log(userName)
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
          <UserName>{userName}</UserName>
          <Line> </Line>

      <Button type="button" onClick={() => toggleModal()}>
            <LogoutSvg src={logoutSvg} alt='exit logo'/>
        <LogoutP>Выйти</LogoutP>
    
        
      </Button>
      
          {/* <Button type="button" onClick={() => toggleModal()}>
            <LogoutSvg />
         </Button> */}

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
