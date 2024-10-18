import React, { FormEvent } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ErrorToast from './ErrorToast';

interface LoginFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  show: boolean;
  message: string;
  hideToast: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, email, setEmail, password, setPassword, show, message, hideToast }) => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <Form onSubmit={handleSubmit} className="p-4 border rounded-3 bg-light shadow-sm">
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label className="fw-bold">Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control-lg"
              placeholder="Introduce tu correo"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-4">
            <Form.Label className="fw-bold">Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control-lg"
              placeholder="Introduce tu contraseña"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 btn-lg">
            Iniciar Sesión
          </Button>
        </Form>
        <ErrorToast
          show={show}
          message={message}
          onClose={hideToast}
        />
      </div>
    </Container>
  );
};

export default LoginForm;
