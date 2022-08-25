import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'Redux/auth/auth-selectors';

export const RedirectRoute = ({ children }) => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLogged ? <Navigate to="/phonebook" replace /> : children}</>;
};
