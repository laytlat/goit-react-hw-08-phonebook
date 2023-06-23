import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('users/signup', user);
      setToken(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response.data._message === 'User validation failed') {
        Notify.failure('Your password is too short');
        return thunkAPI.rejectWithValue();
      }
      if (error.message === 'Request failed with status code 400') {
        Notify.failure('Whoops, this email is already used');
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('users/login', user);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    if (error.message === 'Request failed with status code 400') {
      Notify.failure('Sorry, you entered wrong email or password');
    }
    return thunkAPI.rejectWithValue();
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    unsetToken();
  } catch (error) {
    Notify.failure('Something went wrong, try again later');
    return thunkAPI.rejectWithValue();
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
