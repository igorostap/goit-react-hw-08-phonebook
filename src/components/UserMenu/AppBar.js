import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import UserAuth from './UserAuth';
import { Outlet } from 'react-router-dom';
import authSelectors from 'Redux/auth/auth-selectors';

export default function AppBar() {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);
  return (
    <section>
      {isLogged ? <UserMenu /> : <UserAuth />}
      <hr />
      <Outlet />
    </section>
  );
}
