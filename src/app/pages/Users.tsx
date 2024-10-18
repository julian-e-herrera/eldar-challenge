import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';
import { User } from '../types/User';
import axios from 'axios';
import { FAKE_USER_DB_URL } from '../modules/constants';
import { ROUTES } from '../utils';


  const usersFallback: User[] = [
    { id: 1, role: 'user', email: 'userone@example.com' ,password:"userpass"},
    { id: 2, role: 'user', email: 'usertwo@example.com',password:"userpass" },
    { id: 3, role: 'user', email: 'userthree@example.com',password:"userpass" },
  ];


const Users: React.FC  = () => {
  const navigate = useNavigate();
  const [users,setUsers]=useState<User[]>(usersFallback)



const getUsers = async()=>{
    const response = await axios.get(`${FAKE_USER_DB_URL}/users`);
    setUsers(response.data)
}
  useEffect(() => {
        getUsers()
  }, []);

  const handleDashboardRedirect = () => {
    navigate(ROUTES.DASHBOARD );
  };

  return (
    <Container>
      <h2>Lista de Usuarios</h2>
      <Button variant="primary" onClick={handleDashboardRedirect} style={{ marginBottom: '20px' }}>
        Ir al Dashboard
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
