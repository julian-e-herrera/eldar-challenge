//should be button with props
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../reduxStore/actions/authActions';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // // const handleLogout = () => {
  // //   dispatch(logout() as any);
  // //   navigate('/login');
  // // };

  return (
    <Button variant="secondary" >
      Cerrar Sesión
    </Button>
  );
};

export default LogoutButton;
