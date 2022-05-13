import React from "react";
import './container.css'

export default function Container(props) {
    if (props.giphy){
          return <div>
            <img src={props.giphy.data.images.original.url} alt={props.giphy.id}/>
            <h3>{props.giphy.data.title}</h3>
          </div>
    } else{
        return <h1>Search!</h1>

    }

  }