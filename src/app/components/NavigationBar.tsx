import React  from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { logout } from '../reduxStore/actions/authActions';
import { hasPermission ,isAdmin} from '../roles/permissions';
import { Role } from '../types/Role';

interface NavigationBarProps {
    handleCreate: () => void;
    role:Role
  }

  const NavigationBar: React.FC<NavigationBarProps> = ({ handleCreate,role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout() as any);
    navigate('/login');
  };
  const handleNavigate =()=>{
    navigate('/users');
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <h2>{isAdmin(role)?'Panel de Administración':'Panel Usuario'}</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          {isAdmin(role) && (
            <>
              <Button variant="primary btn-sm ms-1 rounded" onClick={handleNavigate}>
                Ver tabla usuarios
              </Button>
              <Button variant="primary btn-sm ms-1 rounded" onClick={handleCreate}>
                Crear Nuevo
              </Button>
  
              </>
            )}
            <Button variant="secondary btn-sm ms-1 rounded" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
