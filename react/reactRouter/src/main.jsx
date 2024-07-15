import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/home.jsx'
import Profile from './pages/profile.jsx'
import Profiles from './pages/profiles.jsx'
import NotFound from './pages/notFound.jsx'
import MatUi from './pages/matUi.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <MatUi/>, 
    errorElement: <NotFound></NotFound>
  },
  {
    path:'/home',
    element: <Home/>,
    children: [{
      path:':userId',
    element: <Profiles/>
    }]
  },
  // {
  //   path:'/myProfile/:userId',
  //   element: <Profiles/>
  // }
  

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
