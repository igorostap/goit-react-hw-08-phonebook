import authSelectors from 'Redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { UserBox } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  const isLogged = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/phonebook');
    }
  }, [isLogged, navigate]);
  return (
    <>
      <UserBox>
        <p>{userName}</p>
        <button type="button" onClick={() => dispatch(authOperations.logOut())}>
          logOut
        </button>
      </UserBox>
    </>
  );
}
