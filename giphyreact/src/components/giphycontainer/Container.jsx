import React from "react";


export default function container(props) {
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
