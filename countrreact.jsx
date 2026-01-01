import React from 'react';
import { useState, useRef, useEffect } from 'react'

function App() {
const [count, setCount]= useState(0); 
const [isState,setIsstate] = useState(false)//start pause reset
const counter = useRef(null)

useEffect(() =>{
   if(isState){
      counter.current = setInterval(() =>{
      setCount(prev => prev +1)
    }, 1000);
   }
   
   return () =>{
     clearInterval(counter.current)
   }
  
}, [isState])

const handlePause = ()=>{
  setIsstate(false)
}

const handleStart = () =>{
  console.log("@@@@")
  setIsstate(true)
}

const handleReset = () =>{
  setIsstate(false)
  setCount(0)
}


  return (
    <div >
      <h1>Hello, World!</h1>
      <button name="start" onClick={handleStart}>start</button><br/>
       <button name="pause" onClick={handlePause}>pause</button><br/>
        <button name="reset" onClick={handleReset} >Stop</button><br/>
      <div>
        count {count}
      </div>
    </div>
  )
}

export default App
