import React from 'react'

export default function Shipcards(props) {
  if(props.ships){
    const shipArr = props.ships.results
    return(
    shipArr.map((element, index)=>{
      return(
      <div> 
        <h2 key={index}>{element.name} </h2> 
      </div>
      )
    })
  )
  }
}