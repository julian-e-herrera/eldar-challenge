import axios from 'axios';
import { User } from "../../../types/User";
import { FAKE_USER_DB_URL } from '../../constants';


let showToast: (msg: string) => void;

export const setToastFunction = (toastFn: (msg: string) => void) => {
  showToast = toastFn;
};

const signIn = async (user:Pick<User,'email'|'password'> ) => {
  try {
    const response = await axios.post(`${FAKE_USER_DB_URL}/login`, { email: user.email, password: user.password });
    const token = response.data.accessToken;
    localStorage.setItem('token', token);
    return response.data; 
  } catch (error) {
    showToast('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
  }
};

export const SigninService = {
  signIn,
};
