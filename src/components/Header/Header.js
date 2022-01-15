import React from 'react';
import defaultAvatar from '../../icons/avatarDef.png';
import { useSelector, useDispatch } from 'react-redux';
import {authOperations} from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
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
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUsername) || '';
        // const { isShowingModal, toggle } = useModal();

    const logout = () => {
        dispatch(authOperations.logOut());
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
                    
    