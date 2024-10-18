import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { DashboardRouter } from '../dashboard/DashboardRouter';
// import { AuthRouter } from '../modules/auth/AuthRouter';


// import  AuthContext  from '../redux/context';

import { Provider } from 'react-redux';
import store from '../reduxStore';

export function AppRouter(){
   return (
    //   <Provider store={store}>
    //    <BrowserRouter>
    //      <Routes>
    //         <Route path="/*" element={ <AuthRouter /> } />   
    //         <Route path="/dashboard" element={ <DashboardRouter /> } /> 
    //      </Routes>
    //    </BrowserRouter>
    //   </Provider>
    <></>
   );
}

//TODO PUEDE SER BORRADO