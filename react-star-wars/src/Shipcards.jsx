import React from 'react'

export default function Shipcards(props) {
    if(props.data){
  return (
    <div>
    <h3>
    {props.ships.data.count}
    </h3>
    </div>
  )
    }else{
        console.log("This did not work")
    }
}