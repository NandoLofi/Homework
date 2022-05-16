import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
const [ship, setShip] = useState(null)

const shipData = useEffect(()=>{
  fetch("https://swapi.dev/api/starships")
  .then(response => response.json())
  .then(json => setShip(json))
}, [ship])
const allShips = shipData.map((ele, index)=>{


})

  return (
    <div className="App">
      <h1>Fleet of Ships</h1>    

    </div>
  );
}

export default App;
