import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import jsonServer from 'json-server';
import cors from 'cors'
import { ROUTES } from '../app/utils';

const app = express();

const PORT = 5001;
const SECRET_KEY = 'your-secret-key';
const expiresIn = '1h';

app.use(cors())
app.use(bodyParser.json());

interface User {
  id: number;
  email: string;
  password: string;
  role: string;
}

const users: User[] = [
  { id: 1, email: 'user@example.com', password: 'userpass', role: 'user' },
  { id: 2, email: 'admin@example.com', password: 'adminpass', role: 'admin' }
];

// Función para generar un token JWT
const generateToken = (user: User) => {
  return jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn });
};

// Middleware para verificar el token JWT
// const authenticateJWT = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1];
  
//   if (token) {
//     jwt.verify(token, SECRET_KEY, (err, user) => {
//       if (err) {
//         return res.sendStatus(403); // Forbidden
//       }
//       req.user = user;
//       next();
//     });
//   } else {
//     res.sendStatus(401); // Unauthorized
//   }
// };

// Endpoint de login
app.post(ROUTES.LOGIN, (req, res) => {
  const { email, password } = req.body;
  console.log(`Login attempt with email: ${email}`);
  console.log(`Login attempt with password: ${password}`);
 
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const token = generateToken(user);
    console.log(`Login successful for user: ${user.email}`);
    console.log(`Login successful for user: ${user.role}`);
    res.status(200).json({ accessToken: token , user: user});
  } else {
    console.log('Login failed: Incorrect email or password');
    res.status(401).json({ message: 'Incorrect email or password' });
  }
});

/////////////
app.get('/users', (req, res) => {
  res.json(users);
})


// Servir db.json con json-server
const router = jsonServer.router('db.json');
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// reglas de permisos en ===> auth.json
// 6: CRUD completo (Create, Read, Update, Delete) para administradores.

// 4: Solo lectura para usuarios autenticados.

// 0: Sin acceso para usuarios no autenticados.