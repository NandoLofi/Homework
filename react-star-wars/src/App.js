import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
const [ships, setShips] = useState([])
const allShips = async()=>{
  const response = await fetch("https://swapi.dev/api/starships/")
  const data = response.json()
  setShips(data)
  console.log(data)
}


useEffect(()=>{
}, [])


  return (
    <div className="App">
      <h1>Fleet of Ships</h1>    
    </div>
  );
}

export default App;
