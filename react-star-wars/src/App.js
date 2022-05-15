import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  //set state
  const [state, setState] = useState(null)
  //fetch URL
  const getShip = async(searchTerm)=>{
  const response = await fetch("https://swapi.dev/api/starship")
  const data = await response.json()
  setState(data)
  }
 

  return (
    <div className="App">
      <h1>Fleet of Ships</h1>
    


    </div>
  );
}

export default App;
