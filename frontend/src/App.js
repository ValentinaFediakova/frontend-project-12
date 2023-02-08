import React , { useState } from 'react';
import {
  useLocation,
  useNavigate,
  Route,
  Routes,
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
  useRouteError
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from './contexts/index.js';
import useAuth from './hooks/index.js';
import Main from './routes/main/Main';
import Login from './routes/login/Login'
import Signup from './routes/signup/Signup'
import { ErrorBoundary, ErrorPage } from './errors'

import './index.css';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  const logIn = () => {
    setLoggedIn(true);
    // navigate('/', { replace: false });
  }

  const logOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  console.log('auth.loggedIn', auth.loggedIn)

  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

// function ErrorBoundary() {
//   console.log('!!!!!!!!')
//   const error = useRouteError();
//   console.error('error', error);
//   return <div>{error.message}</div>;
// }

const App = () => {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              // errorElement={<ErrorBoundary />}
              path="/" 
              element={
                <PrivateRoute>
                  <Main />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<ErrorPage />}/>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;