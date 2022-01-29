import React, { useState } from 'react';

import FormContainer from '../../components/FormContainer/FormContainer';

import HomeTitle from '../../components/HomeTitle';

import Registration from '../../components/Registration/Registration';

import { BottomContainer, BottomKapusta, Container } from './MainView.styled';
import LogIn from '../../components/LogIn/LogIn';

export default function MainView() {
  const [login, setLogin] = useState(true);

  const onRegisterClick = () => {
    setLogin(false);
  };

  const onComeBackClick = () => {
    setLogin(true);
  };
  return (
    <Container>
      <HomeTitle />

      <FormContainer>
        {login ? (
          <LogIn onClickRegister={onRegisterClick} />
        ) : (
          <Registration onClickComeBack={onComeBackClick} />
        )}
      </FormContainer>
      <BottomContainer>
        <BottomKapusta />
      </BottomContainer>
    </Container>
  );
}
