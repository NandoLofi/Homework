import React from "react";


export default function Container(props) {
  return (
    <div>
      <img src={props.giphy.data.url} alt={props.id} />
      <h3>{props.id}</h3>
    </div>
  )}
