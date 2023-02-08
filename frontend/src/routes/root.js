// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
//   useLocation,
//   createBrowserRouter,
//   useNavigate,
// } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App from '../App';
// import Login from './login/Login'
// import ErrorPage from "../error-page";







// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />
//   }
// ]);

// function GetLocation () {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const userToken = localStorage.getItem("token")
//   console.log('location.pathname', location.pathname)
  
//   if (location.pathname === '/' && !userToken) {
//     navigate('/login', { replace: true });
//   }
// }

// export default GetLocation;
