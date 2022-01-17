import React, { useState } from 'react';
import defaultAvatar from '../../icons/avatarDef.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  logOut,
  } from '../../redux/auth/auth-operations.js';
import { getIsAuthenticated,
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
} from './Header.styled';

import Modal from '../Registration/RegMod';
// import useModal from '../Modal/Modal.jsx';


export default function Header() {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsAuthenticated);
    const name = useSelector(getUserName) || '';

    // const { isShowingModal, toggle } = useModal();
const [setModalOpen, setShowModal] = useState(false);
     const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

    const logoutModal = () => {
        dispatch(logOut());
        toggleModal();
       
    };
  


    return (
        <ContainerHeader>
            <Logo href="/" />
            {isLoggedIn && (
                <UserInfo>
                    <AvatarUser>
                        <img src={defaultAvatar} alt="Default Avatar" width="32" />
                    </AvatarUser>
                    <UserName>{name}</UserName>
                    <Line> </Line>

                    <Button
                        type="button"
                        onClick={() => toggleModal()}
                    >
                        <LogoutP>Выйти</LogoutP>
                        <LogoutSvg />
                        </Button>
                        
      
                     {setModalOpen && (
                        <Modal
                            text={'Вы уверены, что хотите выйти?'}
                             handleClickLeft={logoutModal}
          handleClickRight={toggleModal}
          onClose={toggleModal}
                        />
                    )}
                </UserInfo>
            )}
        </ContainerHeader>
    );
}
                    
    