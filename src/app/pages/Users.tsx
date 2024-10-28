import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { User } from '../types/User';
import axios from 'axios';
import { FAKE_USER_DB_URL } from '../modules/constants';
import { ROUTES } from '../utils';
import TableContainer from '../components/TableContainer';
import NavigationBar from '../components/NavigationBar';
import { useSelector } from 'react-redux';
import { RootState } from '../reduxStore';
import { Role } from '../types/Role';
import NavigationButton from '../components/NavigationButton';


const usersFallback: User[] = [
  { id: 1, role: 'user', email: 'userone@example.com', password: "userpass" },
  { id: 2, role: 'user', email: 'usertwo@example.com', password: "userpass" },
  { id: 3, role: 'user', email: 'userthree@example.com', password: "userpass" },
];


const Users: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>(usersFallback)
  const user = useSelector((state: RootState) => state.auth.user);


  const getUsers = async () => {
    const response = await axios.get(`${FAKE_USER_DB_URL}/users`);
    setUsers(response.data)
  }
  useEffect(() => {
    getUsers()
  }, []);

  const handleDashboardRedirect = () => {
    navigate(ROUTES.DASHBOARD);
  };
  const userValidations = users.map((user) => {
    const response = {
      id: user.id,
      title: user.id,
      userId: user.role,
      body: user.email
    }

    return response
  })

  return (
    <Container>
      <NavigationBar role={user.role as Role} controllers={<NavigationButton variant="primary"
        text="Ir al Dashboard"
        onClick={handleDashboardRedirect}
      />} />

      <TableContainer
        title="Users"
        data={userValidations}
        userRole={user?.role}
        columns={[
          { title: 'ID' },
          { title: 'Role' },
          { title: 'Email' },
        ]}
        handleEdit={() => { console.log('editUser') }}
        handleCreate={() => { console.log('createUser') }}
      />
      
    </Container>
  );
};

export default Users;
