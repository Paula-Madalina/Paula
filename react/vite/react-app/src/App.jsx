// App.jsx
import React, { useState } from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

// import Register from "./components/Register";
// import Login from "./components/Login";
// import Home from "./components/Home";

import Register from "./components/authentication/register/Register";
import Login from "./components/authentication/logIn/Login";
import Home from "./components/authentication/home/Home";
import { ToastContainer } from 'react-toastify'


const App = () => {
  // const [currentPage, setCurrentPage] = useState("register");

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "register":
  //       return <Register />;
  //     case "home":
  //       return <Home />;
  //     default:
  //       return <Login />;
  //   }
  // };

  return (
  //   <div className="App">
  //     <header>
  //       <nav>
  //         {/* Buton pentru Register */}
  //         <button className="swap__button" onClick={() => setCurrentPage("register")}>Register</button>
  //          {/* Buton pentru Login */}
  //          <button className="swap__button" onClick={() => setCurrentPage("login")}>Login</button>
  //         {/* Buton pentru Home */}
  //         <button className="swap__button" onClick={() => setCurrentPage("home")}>Home</button>
  //       </nav>
  //     </header>
  //     <main>
  //       {/* Renderează pagina corespunzătoare */}
  //       {renderPage()}
  //     </main>
  //   </div>
  <ToastContainer></ToastContainer>
  );
};

export default App;
