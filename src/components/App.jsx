import { Routes, Route } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import AppBar from './UserMenu/AppBar';
import { PrivateRoute } from './PrivateRoute';
import { RedirectRoute } from './RedirectRoute';
import { useDispatch } from 'react-redux';
import authOperations from '../Redux/auth/auth-operations';
import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="register" element={<RegisterForm />} />;
          <Route
            path="login"
            element={
              <RedirectRoute>
                <LoginForm />
              </RedirectRoute>
            }
          />{' '}
          ;
          <Route
            path="phonebook"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          ;
        </Route>
      </Routes>
    </>
  );
}
