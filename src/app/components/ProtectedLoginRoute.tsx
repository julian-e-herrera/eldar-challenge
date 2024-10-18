import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../reduxStore';

const ProtectedLoginRoute: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.token);

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default ProtectedLoginRoute