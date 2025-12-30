import React from 'react';
import { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  //const timer = useRef(null);
  
  const search = (value) =>{
    console.log("API called with:", value);
  }
  
  
  const debounce = (callback) =>{
     let timer;
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
        console.log("sumit")
      }, 2000);
  }
  
    const handleChange = (e) =>{
    const value = e.target.value;
    console.log(value)
    debounce(() => search(value), 2000);
  }

  return (
    <div>
      <h1>Hello, World!</h1>
      <div>
 <input type="text" name="search"  onChange={handleChange} />
      </div>
    </div>
  )
}

export default App
