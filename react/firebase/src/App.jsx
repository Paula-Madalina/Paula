import { useState,useEffect } from 'react'
import {db} from "./firebase"
import { collection, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc, addDoc, setDoc } from 'firebase/firestore'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [apartments, setApartments] = useState([]);

// preluare de date

  // 1.GET ALL DOCUMENTS FROM APARTMENTS
  // const apartmentsCollection = collection(db, "apartments");

  // 2. GET specific DOCUMENTS FROM APARTMENTS
// const apartmentsCollection = query(collection(db, "apartments"), where("ap_number", "==", 12))

// 3.DOCUMENT DUPA ID UL DOCUMENTULUI

const apartmentsCollection = doc(db, "apartments", "N5ctOns0ePD1kgXPagph");

  const getApartments = async () => {
    // functioneaza pentru toate documentele sau filtrare cu query
    // const data = await getDocs(apartmentsCollection);

    // pentru document preluat prin id-cand ne vin datele, nu mai este obiect in array si nu putem sa facem map
    // const data = await getDoc(apartmentsCollection);
    // const apartament = data.data();
    // console.log(apartament)

  // pentru toate documentele sau query
    // data.docs.map((map) => {
    //   let test = map.data();
    //   console.log(test)
    // })
    // setApartments(data.docs.map((doc) => ({...doc.data(), id:doc.id})))


    // update apartment data- importam updateDoc
    // let apartamentToUpdate = doc(db, "apartments", "N5ctOns0ePD1kgXPagph")
    // await updateDoc(apartamentToUpdate, {ap_number:99, ap_size:"34erf"});

    // let ap = doc(db, "apartments", "N5ctOns0ePD1kgXPagph");
    // let data =await getDoc(ap);
    // let apartments = data.data()



    // DELETE DOCUMENTS BY ID
    // let apartamentToDelete =  doc(db, "apartments", "N5ctOns0ePD1kgXPagph");
    // await deleteDoc(apartamentToDelete);

    // inserare document nou-CEL MAI IMPORTANT PRACTIC
    // const apartmentsCollection = collection(db, "apartments");
    // await addDoc(apartmentsCollection, {ap_number:12, ap_size:90, city:"Bucuresti"});

    // inserare doc nou cu id setat de noi
    // await setDoc(doc(db, "apartments", "Paula"), {ap_number:12, ap_size:90, city:"Bucuresti"})


    // fara map-pentru ID
    setApartments([{...apartments}]) //trebuie [] ptc avem map in return


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
