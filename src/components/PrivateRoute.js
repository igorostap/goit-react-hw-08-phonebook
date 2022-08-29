import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'Redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);
  console.log('Private Route');
  return <>{isLogged ? children : <Navigate to="/login" replace />}</>;
};
