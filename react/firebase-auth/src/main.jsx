import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Home from './components/home.jsx'
import Header from './components/header.jsx';
import { AuthProvider } from './contexts/authContext.jsx';
import Http

const router = createBrowserRouter([
    {
    path:'/',
    element:<Home></Home>
},
{
    path:'/register',
    element:<Register></Register>
}, 
{
    path:'/login',
    element:<Login></Login>
},
{
    path:'/header',
    element:<Header></Header>
},
{
  path:'/http',
  element:<Header></Header>
},
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}>

    </RouterProvider>
  </AuthProvider>
)
