import { useState,useEffect } from 'react'
import {db} from "./firebase"
import { collection,getDocs } from 'firebase/firestore'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './register/Register'

function App() {

  return (
    <>
    <Register/>
    </>
  )
}

export default App;
