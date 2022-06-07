import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import stocks from '../stockinfo'


export default function Price() {
  const params = useParams()
  const stockSymbol = params.symbol

  const [data, setData] = useState([])
  const getInfo = ()=>{
    const stock = stocks.find(({symbol})=>symbol ===stockSymbol)
    setData(stock)
    console.log(data)
  }
  useEffect(()=>{getInfo()})

  const loaded = ()=>{
    <div>
    <h3>{data.name}</h3>,
    <h3>{data.open}</h3>,
    <h3>{data.lastPrice}</h3>
    </div>
  }
  
  return (
    <div>
    <h3>Name: {data.name}</h3>
    <h3>Open Pice: {data.open}</h3>
    <h3>Last Price: {data.lastPrice}</h3>
    </div>
    )
}
