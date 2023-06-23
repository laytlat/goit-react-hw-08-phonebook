import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px;
  background-color: #f5f5f5;

  margin-bottom: 40px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 30px;
  color: black;

  :hover {
    color: red;
  }

  &.active {
    color: orange;
  }
`;

export const StyledAuthContainer = styled.div`
  display: flex;
  gap: 15px;

  padding-right: 10px;
  padding-bottom: 5px;
  border-bottom: 3px solid orange;
  border-bottom-left-radius: 3px;
  border-right: 3px solid orange;
  border-top-right-radius: 3px;
`;

export const StyledUserMenu = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledUserName = styled.p`
  font-size: 30px;
  margin: 0;
`;
export const StyledUserLogout = styled.button`
  font-size: 20px;

  cursor: pointer;

  border-radius: 4px;
  :hover,
  :focus {
    color: red;
  }
`;
