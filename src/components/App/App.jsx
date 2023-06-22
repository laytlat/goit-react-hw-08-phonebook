// import React, { useState, useEffect } from 'react';

import { Container } from './App.styled';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/operations/authOperations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Container>
  );
}
