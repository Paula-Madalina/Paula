import { useRef, useState, useEffect } from "react";

function Home() {
  // const [name, setName] = useState('');
  // const  inputRef = useRef(1);
  // useEffect(()=> {
  //   console.log(inputRef)

  // },[])

  // useEffect(()=> {
  //   setRenderCount(prevRenderCount=>renderCount=prevRenderCount+1)
  // },[]);

  return(
    <div>
      <h1>Home Page</h1> <br />
    <button className="login__register__button" type="submit">Login</button> 
    <button className="login__register__button" type="submit">Sign up</button>    
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
