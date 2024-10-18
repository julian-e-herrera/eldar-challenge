import axios from 'axios';
import { Dispatch } from 'redux';
import { setToken, setUser } from '../../../reduxStore/slices/authSlice';
// import  fetchData  from '../../../reduxStore/action/dataSlice';

export const initializeAuth = (dispatch: Dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(setToken(token));
    axios.get('/api/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      dispatch(setUser(response.data));
    //   dispatch(fetchData());
    })
    .catch(error => {
      console.error('Error al cargar los datos del usuario:', error);
      localStorage.removeItem('token'); // Elimina el token si es inválido
    });
  }
};
