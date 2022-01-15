import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from '../../redux/auth';
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

export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setRegister] = useState(false);
  const [emailError, setEmailError] = useState('Это обязательное поле');
    const [passwordError, setPasswordError] = useState('Это обязательное поле');
  const [nameError, setNameError] = useState('Это обязательное поле');
  
  const [errorSymbol, _setErrorSymbol] = useState('*');

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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChangeForm = e => {
    e.preventDefault();
    setRegister(!isRegister);
  };

  return (
   
      <Fragment>
        <Title>Вы можете авторизоваться с помощью Google Account:</Title>
        <GoogleContainer>
          <Google href=''>Google</Google>
        </GoogleContainer>
      <Title>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </Title>

      <Forma onSubmit={handleSubmit} autoComplete="on">
        {isRegister ? (
          <Label>
            {nameError && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {errorSymbol}{' '}
                            </span>
            )}
            <InputDescr>Введите имя:</InputDescr>
            <FormInput
              type="name"
              name="name"
              pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
              title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
              required
              value={name}
              placeholder={'Your name'}
              onChange={handleChange}
            />
            {nameError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {emailError}{' '}
                            </div>
            )}
          </Label>
        ) : null}

        <Label>
          {emailError && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {errorSymbol}{' '}
                            </span>
            )}
          <InputDescr>Электронная почта:</InputDescr>

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder={'your@email.com'}
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email может, сoстоять из букв цифр и обязательного символа @"
            required
            aria-describedby="emailHelp"
          />
          {emailError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {emailError}{' '}
                            </div>
            )}
          {/* <NoticeText>
            We'll never share your email with anyone else.
          </NoticeText> */}
        </Label>

        <Label>
          {passwordError && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {errorSymbol}{' '}
                            </span>
            )}
          <InputDescr>Пароль: </InputDescr>

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder={'········'}
            pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
            title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
            required
          />
          {passwordError && (
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
          {isRegister ? (
            <Fragment>
              <Button
                type="button"
                className="btn btn-primary"
                onClick={handleChangeForm}
              >
                <Span>Войти</Span>
              </Button>
              <Button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                <Span>Регистрация</Span>
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                <Span>Войти</Span>
              </Button>
              <Button
                type="button"
                className="btn btn-primary"
                onClick={handleChangeForm}
              >
                <Span>Регистрация</Span>
              </Button>
            </Fragment>
          )}
        </BtnContainer>
      </Forma>
    </Fragment>
 
  );
}
