import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import Shipcards from './Shipcards';

function App() {
const [ships, setShips] = useState(null)
const URL = "https://swapi.dev/api/starships/"

async function getShip() {
  const data = await fetch(URL).then(response => response.json())
  setShips(data)
  console.log(data)
}
useEffect(()=>{
  getShip()
},[])

  return (
    <div className="App">
      <h1>STARWARS SHIPS</h1>   
      <div className='Ships'>
      <Shipcards className="ships" ships={ships}/>
      </div>
    </div>
  );
}

export default App;
