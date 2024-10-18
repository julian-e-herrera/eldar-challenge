import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

interface ErrorToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ show, message, onClose }) => {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast show={show} onClose={onClose} bg="danger" delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ErrorToast;
