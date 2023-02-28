import axios from 'axios';
import { Token, ResponseData } from './types';
import Cookies from 'js-cookie';

export async function login(email: string, password: string) {
  try {
    const response = await axios.post<Token>(
      `${process.env.BE_API_URL}/auth/login`,
      {
        email,
        password,
      }
    );
    const { success, message, token } = response.data;

    if (success) Cookies.set('token', token, { expires: 24 });

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
