import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from '../../redux/auth';
import {
  Container,
  Forma,
  Label,
  Title,
  NoticeText,
    Button,
  Span
} from './Registration.styled';




export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setRegister] = useState(false);


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
    <Container>
      <Title>Вы можете авторизоваться с помощью Google Account:</Title>
      <Title>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </Title>

      <Forma onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          {isRegister ? (
            <Label className="form-label">
              Введите имя:
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={handleChange}
                className="form-control"
              />
            </Label>
          ) : null}
        </div>
        <div className="form-group">
          <Label htmlFor="exampleInputEmail1" className="form-label">
            Электронная почта:
          </Label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <NoticeText>
            We'll never share your email with anyone else.
          </NoticeText>
        </div>

        <div className="form-group">
          <Label htmlFor="exampleInputPassword1" className="form-label">
           Пароль:
          </Label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
          <NoticeText>
            Your password must be 8-20 characters long and must not contain
            spaces, special characters, or emoji.
          </NoticeText>
        </div>
        {isRegister ? (
          <Fragment>
            <Button type="button" className="btn btn-primary" onClick={handleChangeForm}>
              <Span>  Войти</Span>
            </Button>
            <Button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              <Span>  Регистрация</Span>
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              <Span>  Войти</Span>
            </Button>
            <Button type="button" className="btn btn-primary" onClick={handleChangeForm}>
              <Span>  Регистрация</Span>
            </Button>
          </Fragment>
        )}
          </Forma>
         
      </Container>
      </Fragment>
  );
}