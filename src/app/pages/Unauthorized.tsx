import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../reduxStore';

interface UnauthorizedProps {
  message?: string;
  isAuthenticated?: boolean;

}
const auth =  localStorage.getItem('token') !==null
const Unauthorized: React.FC<UnauthorizedProps> = ({
  message,
  isAuthenticated = auth,
}) => {


  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user)
  return (
    <div className="text-center">
      <h1>{message || 'Acceso no autorizado'}</h1>
      <p>
        {isAuthenticated
          ? 'No tienes permisos para acceder a esta página.'
          : 'Por favor, inicia sesión para continuar.'}
      </p>
      <div>
        {!isAuthenticated && (
          <Button variant="primary" href={'/login'}>
            Iniciar sesión
          </Button>
        )}
        {isAuthenticated && (
          <>
  
              <Button variant="secondary" href={'/dashboard'}>
                Volver al dashboard
              </Button>
        
      
          </>
        )}
      </div>
    </div>
  );
};

export default Unauthorized;