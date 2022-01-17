import React from 'react';
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

// import Modal from '../Modal/logoutModal';
// import useModal from '../Modal/useModal';


export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsAuthenticated);
    const name = useSelector(getUserName) || '';
        // const { isShowingModal, toggle } = useModal();

    const logout = () => {
        dispatch(logOut());
        // toggle();
       
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
                        // onClick={() => toggle()}
                    >
                        <LogoutP>Выйти</LogoutP>
                        <LogoutSvg />
                    </Button>
                     {/* {isShowingModal && (
                        <Modal
                            text={'Вы уверены, что хотите выйти?'}
                            toAgree={logout}
                            onClose={toggle}
                        />
                    )} */}
                </UserInfo>
            )}
        </ContainerHeader>
    );
}
                    
    