import React, { ReactNode } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../reduxStore/actions/authActions';
import { isAdmin } from '../roles/permissions';
import { Role } from '../types/Role';
import { ROUTES } from '../utils';

interface NavigationBarProps {
  role: Role,

  controllers?: ReactNode
}

const NavigationBar: React.FC<NavigationBarProps> = ({ role, controllers }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout() as any);
    navigate(ROUTES.LOGIN);
  };
 
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <h2>{isAdmin(role) ? 'Panel de Administración' : 'Panel Usuario'}</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {isAdmin(role) && (controllers)}
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
