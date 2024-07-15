import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // const [name, setName] = useState('');
  // const  inputRef = useRef(1);
  // useEffect(()=> {
  //   console.log(inputRef)

  // },[])

  // useEffect(()=> {
  //   setRenderCount(prevRenderCount=>renderCount=prevRenderCount+1)
  // },[]);

  const handleLoginClick =() => {
    navigate('/login'); 

   } 
   const handleRegisterClick =() => {
    navigate('/register'); 

   }

  return(
    <div className="home__navbar">
      <h1 className="home__title">Home Page</h1>
    <button className="login__register__button" type="submit" onClick={handleRegisterClick}>Register</button>    
    <button className="login__register__button" type="submit" onClick={handleLoginClick}>Login</button> 
    </div>
  )

  return (
    <div>
      {/* <input
      ref={inputRef} 
      type="text" 
      value={name} 
      onChange={(e)=>{
        // renderCount.current = renderCount.current+1
        setName(e.target.value)}}
         />
      <div>Your name is: {name} </div>
      <button onClick={()=> {
        inputRef.current.focus();
      }}>Focus Input</button>

      <div>Page rendered: {renderCount.current} times </div> */}
    </div>
  );
};

export default Home;
