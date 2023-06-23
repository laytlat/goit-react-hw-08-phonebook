import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/operations/authOperations';
import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
