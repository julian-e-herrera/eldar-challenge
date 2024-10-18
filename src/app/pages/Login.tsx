
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../reduxStore/slices/authSlice';
import { setToastFunction, SigninService } from '../modules/auth/services/signin.service';
import { useToast } from '../hooks/error/errorHadler';
import LoginForm from '../components/LoginForm';
import {  Container } from 'react-bootstrap';

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
    SigninService.signIn({ email, password }).then((data) => {
      const token = data.accessToken;
      localStorage.setItem('token', token);  // Guardar token en localStorage
      const { id, role } = data.user;
      dispatch(setUser({ id, role }));
      navigate('/dashboard', { replace: true });
    }).catch((error) => {
      console.error(error);
      showToast(error.message);
    });
  };

  return (
    <Container>
      <LoginForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        show={show}
        message={message}
        hideToast={hideToast}
      />
    </Container>
  );
};

export default Login;
