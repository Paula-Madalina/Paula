import { useState,useEffect } from 'react'
import {db} from "./firebase"
import { collection, getDocs } from 'firebase/firestore'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [apartments, setApartments] = useState([]);

  const apartmentsCollection = collection(db, "apartments");
  const getApartments = async () => {
    const data = await getDocs(apartmentsCollection);
    // data.docs.map((map) => {
      // let test = map.data();
      // console.log(test)
    // })
    // console.log(data)

    setApartments(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
  }
  useEffect(()=> {
    getApartments();
  },[])

  return (
    <>
    {apartments.map((ap)=>{
     return (
       <div key={ap.id}>
        Apartement number: {ap.ap_number} , 
        Apartment size:  {ap.ap_size} , 
        Street: {ap.street_name}
        <hr></hr>
       </div>
     )
    })}
   </>
  )
}

export default App
