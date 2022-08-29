import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import authSelectors from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { FormBox, Input, Head } from './LoginForm.styled';
const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogged = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/phonebook');
    } // если залогинен => в тел. книгу
  }, [isLogged, navigate]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Head>Сторінка логіна</Head>

      <FormBox onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Пошта
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
          />
        </label>

        <label style={styles.label}>
          Пароль
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            pattern="[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*"
            title="symbol and number"
            required
          />
        </label>

        <button type="submit">Війти</button>
      </FormBox>
    </div>
  );
}
