import axios from 'axios';

export async function login(email: string, password: string) {
  try {
    await axios.post('/auth/login', {
      email,
      password,
    });

    return { success: true, message: 'Successful log in' };
  } catch (error) {
    return { success: false, message: 'Error signing up' };
  }
}

export async function signup(
  username: string,
  email: string,
  password: string
) {
  try {
    await axios.post('/auth/signup', {
      email,
      password,
    });

    return { success: true, message: 'Successful sign up' };
  } catch (error) {
    return { success: false, message: 'Error logging in' };
  }
}
