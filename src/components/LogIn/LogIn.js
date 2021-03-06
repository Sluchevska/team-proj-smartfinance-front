import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { 
  logIn,
  } from '../../redux/auth/auth-operations';



import {
  Forma,
  Title,
  Button,
  InputDescr,
  BtnContainer,
  Label,
  FormInput,
  Google,
  GoogleContainer,
} from './LogIn.styled';


export default function LogIn({ onClickRegister}) {
  const dispatch = useDispatch();
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [emailError, setEmailError] = useState('Это обязательное поле');
  const [passwordError, setPasswordError] = useState('Это обязательное поле');
  
  const [emailW, setEmailW] = useState(false);
  const [passwordW, setPasswordW] = useState(false);
 
  const [errorSymbol, setErrorSymbol] = useState('*');
 

 

  const blurHandler = e => {
    switch (e.target.name) {
      
      case 'email':
        setEmailW(true);
        break;
      case 'password':
        setPasswordW(true);
        break;
      default:
        return;
    }
  };

  const clearInput = () => {
    
    setEmail('');
    setPassword('');
  };


  const handleSubmit = e => {
    e.preventDefault();
    if ( !email.trim() || !password.trim()) {
      return toast.error('Please fill out all required fields!');
    } else if (password.length < 7) {
      return toast.info('The password should be least at 7 characters long');
    }
  
 
    dispatch(logIn({ email, password }));
 
    clearInput();
  };



  const emailHandler = e => {
    setEmail(e.target.value);
    const check =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!check.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл');

      setErrorSymbol('*');
      if (!e.target.value) {
        setEmailError('это обязательное поле');
        setErrorSymbol('*');
      }
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть не меньше 6 символов');
      if (!e.target.value) {
        setPasswordError('это обязательное поле');
      }
    } else {
      setPasswordError('');
    }
  };

  return (
    <Fragment>
      <Title>Вы можете авторизоваться с помощью Google Account:</Title>
      <GoogleContainer>
        <Google
          href="https://team-proj-smartfinance-back.herokuapp.com/api/users/google"
              rel="noreferrer"
              target="_blank">
          Google
        </Google>
      </GoogleContainer>
      <Title>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </Title>

      <Forma onSubmit={handleSubmit} autoComplete="on" action="">
        

        <Label>
          {emailError && emailW && (
            <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
              {errorSymbol}{' '}
            </span>
          )}
          <InputDescr>Электронная почта:</InputDescr>

          <FormInput
            onBlur={blurHandler}
            type="email"
            name="email"
            value={email}
            onChange={emailHandler}
            placeholder={'your@email.com'}
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email может, сoстоять из букв цифр и обязательного символа @"
            required
            aria-describedby="emailHelp"
          />
          {emailError && emailW && (
            <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
              {emailError}{' '}
            </div>
          )}
        
        </Label>

        <Label>
          {passwordError && passwordW && (
            <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
              {errorSymbol}{' '}
            </span>
          )}
          <InputDescr>Пароль: </InputDescr>

          <FormInput
            onBlur={blurHandler}
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
            placeholder={'········'}
            pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
            title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
            required
          />
          {passwordError && passwordW && (
            <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
              {passwordError}{' '}
            </div>
          )}
        
        </Label>
        <BtnContainer>
          <Button type="submit">
         ВОЙТИ
          </Button>
          <Button type="button" onClick={onClickRegister}>  РЕГИСТРАЦИЯ</Button>
          

        </BtnContainer>
      </Forma>
    </Fragment>
  );
}
