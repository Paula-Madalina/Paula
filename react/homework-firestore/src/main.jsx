import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contexts/authContext.jsx';
import './index.css'
import Register from './components/register/Register';
import NotFound from './components/notFound/NotFound';
import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import UsersLogged from './components/Users/UsersLogged.jsx';
import Http from './components/http.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [{
      path:'/users',
    element: <UsersLogged/>
    }]
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <NotFound />

  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*', 
    element: <NotFound />
  },
  {
    path:'/header',
    element:<Header></Header>
  },
  {
    path:'/http',
    element:<Http></Http>
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
  <AuthProvider>
    <RouterProvider router={router}>

    </RouterProvider>
  </AuthProvider>
)
