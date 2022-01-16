import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations, authSelectors } from '../../redux/auth';


import {
  
  Forma,
  Title,
  
  Button,
  Span,
  InputDescr,
  BtnContainer,
 
  Label,
  FormInput,
 
  Google,
 
  GoogleContainer,
} from './Registration.styled';
import RegMod from './RegMod';

export default function Registration({ onClickComeBack }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setRegister] = useState(false);
  const [emailError, setEmailError] = useState('Это обязательное поле');
    const [passwordError, setPasswordError] = useState('Это обязательное поле');
  const [nameError, setNameError] = useState('Это обязательное поле');
  const [emailW, setEmailW] = useState(false);
  const [passwordW, setPasswordW] = useState(false);
  const [nameW, setNameW] = useState(false)
  const [errorSymbol, setErrorSymbol] = useState('*');
  const [setModalOpen, setShowModal] = useState(false);
  
   const user = useSelector (authSelectors.getUserName);
 
const toggleModal = () => {
    setShowModal(setShowModal => !setShowModal);
  };
  
  const blurHandler = e => {
    switch (e.target.name) {
      case 'name':
        setNameW(true);
        break;
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
       setName(''); 
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      return toast.error('Please fill out all required fields!');
    } else if (password.length < 7) {
      return toast.info('The password should be least at 7 characters long');
    }
    dispatch(authOperations.register({ name, email, password }));
 
    clearInput()
  };

  const handleChangeForm = e => {
    e.preventDefault();
    setRegister(!isRegister);
  };

  const nameHandler = e => {
    setName(e.target.value);
    const re = /^[A-Za-zА-Яа-яЁё' '\-()0-9]{3,30}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Некорректное имя');
      setErrorSymbol('*');
      if (!e.target.value) {
        setNameError('это обязательное поле');
        setErrorSymbol('*');
      }
    } else {
      setNameError('');
    }
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
          <Google href='https://team-proj-smartfinance-back.herokuapp.com/'>Google</Google>
        </GoogleContainer>
      <Title>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </Title>

      <Forma onSubmit={handleSubmit} autoComplete="off" action="" >
       
          <Label>
            {nameError && nameW && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {errorSymbol}{' '}
                            </span>
            )}
            <InputDescr>Введите имя:</InputDescr>
          <FormInput
              onBlur={blurHandler}
              type="name"
              name="name"
              pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
              title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
              required
              value={name}
              placeholder={'Your name'}
              onChange={nameHandler}
            />
            {nameError && nameW &&(
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {nameError}{' '}
                            </div>
            )}
          </Label>
        

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
          {/* <NoticeText>
            We'll never share your email with anyone else.
          </NoticeText> */}
        </Label>

        <Label>
          {passwordError &&  passwordW && (
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
          {/* <NoticeText>
            Your password must be 8-20 characters long and must not contain
            spaces, special characters, or emoji.
          </NoticeText> */}
        </Label>
        <BtnContainer>
          <Button
                type="button"
                onClick={onClickComeBack}
          >  ВЕРНУТЬСЯ</Button>
           <Button
                type="submit"
              
          >  РЕГИСТРАЦИЯ  </Button>
           {setModalOpen && (
            <RegMod
              
              modalButtonleft={'ГОТОВО'}
              modalButtonRight={'ВЕРНУТЬСЯ'}
              handleClickLeft={toggleModal}
              handleClickRight={toggleModal}
              onClose={toggleModal}
           
            />
          )}
          

          
        </BtnContainer>
      </Forma>
    </Fragment>
 
  );
}
