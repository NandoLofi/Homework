import React from "react";


export default function Container(props) {
    if (props.giphy){
          return <div>
            <img src={props.giphy.data.images.original.url} alt={props.giphy.id}/>
          </div>
    } else{
        return <h1>Search!</h1>

    }

  }