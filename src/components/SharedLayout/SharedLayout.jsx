import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logout } from 'redux/operations/authOperations';
import {
  selectIsLoggedIn,
  selectIsRefreshingCurrentUser,
  selectUser,
} from 'redux/selectors';
import {
  StyledAuthContainer,
  StyledHeader,
  StyledNav,
  StyledNavLink,
  StyledUserMenu,
  StyledUserName,
  StyledUserLogout,
} from './SharedLayout.styled';
import { Container } from 'components/App/App.styled';

export default function SharedLayout() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshingCurrentUser = useSelector(selectIsRefreshingCurrentUser);
  return isRefreshingCurrentUser ? (
    <ColorRing />
  ) : (
    <>
      <StyledHeader>
        <StyledNav>
          {isLoggedin && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
          {!isLoggedin && (
            <StyledAuthContainer>
              <StyledNavLink to="/register">Register</StyledNavLink>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </StyledAuthContainer>
          )}
          {isLoggedin && (
            <StyledUserMenu>
              <StyledUserName>{user?.name}</StyledUserName>
              <StyledUserLogout
                type="button"
                onClick={() => dispatch(logout())}
              >
                Logout
              </StyledUserLogout>
            </StyledUserMenu>
          )}
        </StyledNav>
      </StyledHeader>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
