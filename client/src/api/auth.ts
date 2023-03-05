import axios from 'axios';
import { WithToken, ResponseData } from './types';
import { setCookie } from 'cookies-next';
import store from '../redux/store';
import { updateCurrentUser } from '../redux/state';

export async function login(email: string, password: string) {
  try {
    const response = await axios.post<WithToken>(
      `${process.env.BE_API_URL}/auth/login`,
      {
        email,
        password,
      }
    );
    const { success, message, token, user } = response.data;
    if (success) {
      setCookie('token', token, {
        maxAge: 60 * 60 * 24,
        httpOnly: false,
      });
      store.dispatch(updateCurrentUser(user));
    }

    return { success, message };
  } catch (error) {
    return { success: false, message: 'Error logging in' };
  }
}

export async function signup(
  username: string,
  email: string,
  password: string
) {
  try {
    const response = await axios.post<ResponseData>(
      `${process.env.BE_API_URL}/auth/signup`,
      {
        username,
        email,
        password,
      }
    );

    const { success, message } = response.data;

    return { success, message };
  } catch (error) {
    return { success: false, message: 'Error signing up' };
  }
}
