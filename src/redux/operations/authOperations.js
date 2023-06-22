import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('user/register', async user => {
  try {
    const response = await axios.post('users/signup', user);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk('user/login', async user => {
  try {
    const response = await axios.post('users/login', user);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await axios.post('users/logout');
    unsetToken();
  } catch (error) {
    console.log(error);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setToken(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
