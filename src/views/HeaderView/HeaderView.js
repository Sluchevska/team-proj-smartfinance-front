import React from 'react';

import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '../../redux/auth/auth-selectors.js';
import { ContainerHeader, Logo } from './HeaderView.styled';

import UserNav from '../../components/UserNav/UserNav';

export default function HeaderView() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <ContainerHeader>
      <Logo href='/' alt='logo' />

      {isLoggedIn && <UserNav />}
    </ContainerHeader>
  );
}
