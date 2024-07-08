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
