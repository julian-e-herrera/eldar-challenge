import axios from 'axios';
import { BASE_DATA_URL } from '../constants';

// Crear una instancia de Axios con la configuración base
const api = axios.create({
  baseURL: BASE_DATA_URL,  // URL base de la API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token JWT a las cabeceras de las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    if (error.response.status === 401) {
      // Manejo específico para errores 401 (no autorizado)
      alert('No autorizado, por favor inicia sesión.');
    }
    return Promise.reject(error);
  }
);
export default api