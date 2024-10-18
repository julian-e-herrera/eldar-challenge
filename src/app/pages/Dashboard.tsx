
import React, { useState, useEffect } from 'react';
import { Container,Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch } from '../reduxStore';
import { Posteo } from '../types/Posteo';
import DataTable from '../components/DataTable';
import FormModal from '../components/FormModal';
import NavigationBar from '../components/NavigationBar';
import {  fetchData ,createPost, editPost } from '../reduxStore/actions/dataActions';
import { Role } from '../types/Role';


const Dashboard: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.data.data);
  const user = useSelector((state: RootState) => state.auth.user);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editItem, setEditItem] = useState<Posteo | null>(null);
  const [newItem, setNewItem] = useState({ title: '', userId: user.id, body: '' });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  const handleCreate = () => {
    setNewItem({ title: '', userId: user.id, body: '' });
    setShowModal(true);
  };

  const handleEdit = (item: Posteo) => {
    setEditItem(item);
    setShowModal(true);
  };

  const handleSave = async () => {
    setIsLoading(true); // Mostrar el spinner de carga
    try {
      if (editItem) {
        dispatch(editPost(editItem.id, editItem));
      } else {
        dispatch(createPost({
          title: newItem.title,
          userId: Number(newItem.userId),
          body: newItem.body,
        }));
        
      }
      setShowSuccessMessage(true)
      setShowModal(false);
    } catch (error) {
      console.error('Error saving data', error);
    
    } finally {
      setIsLoading(false); 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editItem) {
      setEditItem({ ...editItem, [e.target.name]: e.target.value });
    } else {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
    }
  };

  const closeModal = () => {
    setShowSuccessMessage(false)
    setShowModal(false);
    setEditItem(null);
  };

 

  return (
    <Container>
      <NavigationBar  role={user.role as Role}/>
      {showSuccessMessage && (
        <Alert variant="success" 
        onClose={() => setShowSuccessMessage(false)}
        dismissible className="mt-3">
          Posteo creado exitosamente.
        </Alert>
      )}
      <DataTable data={data} handleEdit={handleEdit} handleCreate={handleCreate} userRole={user?.role} />
      <FormModal
        show={showModal}
        handleClose={closeModal}
        handleSave={handleSave}
        handleChange={handleChange}
        isLoading={isLoading}
        editItem={editItem}
        newItem={newItem}
      />
     
    </Container>
  );
};

export default Dashboard;
