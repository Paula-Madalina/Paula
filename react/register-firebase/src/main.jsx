import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Register from './register/Register.jsx'
import NotFound from './notFound/notFound.jsx';
import Login from './login/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <Login />
  }
  //   // children: [{
  //   //   path: ':userId',
  //   //   element: <Profiles />
  //   // }]
  // },
  // {
  //   path: '/login',
  //   element: <Login />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
