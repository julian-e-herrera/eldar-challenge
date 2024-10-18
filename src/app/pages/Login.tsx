import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  setUser  } from '../reduxStore/slices/authSlice'
import { Button, Form, Container } from 'react-bootstrap';
import { setToastFunction, SigninService } from '../modules/auth/services/signin.service';
import ErrorToast from '../components/ErrorToast';
import { useToast } from '../hooks/error/errorHadler';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { show, message, showToast, hideToast } = useToast();

  useEffect(() => {
    setToastFunction(showToast);
  }, [showToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      SigninService.signIn({email:email, password:password}).then((data)=>{
      const token = data.accessToken;
      localStorage.setItem('token', token);  // Guardar token en localStorage
      const { id, role } = data.user;
      dispatch(setUser( { id, role }));
      navigate("/dashboard", { replace: true });
      }).catch((error)=>{
          console.error(error)
      });
      
  };

  return (
    <Container>
      <h2>Inicio de Sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
      <ErrorToast
        show={show}
        message={message}
        onClose={hideToast}
      />
    </Container>
  );
};

export default Login;

