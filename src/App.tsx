import { Provider } from 'react-redux';
import store from './app/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app/router/AppRouter';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>
);

export default App;