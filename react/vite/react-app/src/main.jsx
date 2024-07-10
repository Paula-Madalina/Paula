import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './main.css'

import Home from './components/authentication/home/Home.jsx'
import Register from './components/authentication/register/Register.jsx'
import Login from './components/authentication/logIn/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    // errorElement: <NotFound />
  },
  {
    path: '/register',
    element: <Register />
    // children: [{
    //   path: ':userId',
    //   element: <Profiles />
    // }]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
