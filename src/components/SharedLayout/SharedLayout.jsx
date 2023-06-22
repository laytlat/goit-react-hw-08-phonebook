import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from 'redux/operations/authOperations';
import {
  selectIsLoggedIn,
  selectIsRefreshingCurrentUser,
  selectUser,
} from 'redux/selectors';

export default function SharedLayout() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshingCurrentUser = useSelector(selectIsRefreshingCurrentUser);
  return isRefreshingCurrentUser ? (
    <ColorRing />
  ) : (
    <>
      <header>
        <nav>
          {isLoggedin && <NavLink to="/contacts">Contacts</NavLink>}
          {!isLoggedin && (
            <div>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          )}
          {isLoggedin && (
            <div>
              <p>{user?.name}</p>
              <button type="button" onClick={() => dispatch(logout())}>
                Logout
              </button>
            </div>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
