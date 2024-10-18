import {jwtDecode, JwtPayload} from 'jwt-decode';
import { Dispatch } from 'redux';
import { setToken, setUser ,logout as logoutAction} from '../slices/authSlice';

interface DecodedToken extends JwtPayload {
  id: number;
  role: string;
}

export const initializeAuth = () => (dispatch: Dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode<DecodedToken>(token)
    dispatch(setToken(token));
    dispatch(setUser({ id: decodedToken.id, role: decodedToken.role}));
  }
};

export const login = (token: string) => (dispatch: Dispatch) => {
  const decodedToken = jwtDecode<DecodedToken>(token)
  localStorage.setItem('token', token); // Guardar el token en localStorage
  dispatch(setToken(token));
  dispatch(setUser({ id: decodedToken.id, role: decodedToken.role}));
};

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutAction());
};

