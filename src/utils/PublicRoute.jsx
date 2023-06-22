import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedin && restricted;

  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}
