import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import ProtectedLoginRoute from "../components/ProtectedLoginRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Unauthorized from "../pages/Unauthorized";




export const AppRoutes = () =>{ 

  return  (

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
        <Route path="/*" element={<Unauthorized  message={"Eldar Challenge "}/>} />
    </Routes>
)};