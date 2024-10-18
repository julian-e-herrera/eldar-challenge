import React from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { Posteo } from '../types/Posteo';

interface FormModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isLoading: boolean;
  editItem: Posteo | null;
  newItem: Omit<Posteo, 'id'>;
}

const FormModal: React.FC<FormModalProps> = ({ show, handleClose, handleSave, handleChange, isLoading, editItem, newItem }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editItem ? 'Editar Item' : 'Crear Nuevo Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editItem ? editItem.title : newItem.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formUserId">
            <Form.Label>Usuario ID</Form.Label>
            <Form.Control
              type="text"
              name="userId"
              value={editItem ? editItem.userId : newItem.userId}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              name="body"
              value={editItem ? editItem.body : newItem.body}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
