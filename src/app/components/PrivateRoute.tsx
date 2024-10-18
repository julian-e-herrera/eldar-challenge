import React from 'react';
import { Navigate, Outlet ,useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../reduxStore';

interface PrivateRouteProps {
  roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace/>;
  }

  return <Outlet />;
};

export default PrivateRoute;