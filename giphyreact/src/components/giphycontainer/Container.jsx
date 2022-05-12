import React from "react";


export default function Container(props) {
  if(props.data){
  return (
    <div>
      <img src={props.images.original} />
    </div>
  )
  }
  else{
    return
      <h1>Try again</h1>
    
  }
}
