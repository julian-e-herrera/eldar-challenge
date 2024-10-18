import { Provider } from 'react-redux';
import store from './app/reduxStore';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Login from './app/pages/Login';
import Dashboard from './app/pages/Dashboard';
import PrivateRoute from './app/components/PrivateRoute';
import Users from './app/pages/Users';
import ProtectedLoginRoute from './app/components/ProtectedLoginRoute';


const App = () => (
   <Provider store={store}>
   <BrowserRouter>
     <Routes>
        <Route element={<ProtectedLoginRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
       <Route element={<PrivateRoute roles={['user', 'admin']} />}>
         <Route path="/dashboard" element={<Dashboard />} />
       </Route>
       <Route element={<PrivateRoute roles={['admin']} />}>
         <Route path="/users" element={<Users />} />
       </Route>
       <Route path="/" element={<Login />} />
     </Routes>
   </BrowserRouter>
 </Provider>
   );



export default App;