import axios from 'axios';
import Cookies from 'js-cookie';

export async function login(email: string, password: string) {
  try {
    const res = await axios.post('/auth/login', {
      email,
      password,
    });
    // const { success, message, token } = res;

    // if (success) Cookies.set('token', token, { expires: 24 });
    console.log(res, 'HEREEEE');

    return { success: true, message: 'Successful log in' };
  } catch (error) {
    return { success: false, message: 'Error logging in' };
  }
}

export async function signup(
  username: string,
  email: string,
  password: string
) {
  console.log(username, email, password);
  try {
    await axios.post('/auth/signup', {
      username,
      email,
      password,
    });

    return { success: true, message: 'Successful sign up' };
  } catch (error) {
    return { success: false, message: 'Error signing up' };
  }
}
