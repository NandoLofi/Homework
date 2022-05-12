import React from "react";
import { useState } from "react";


export default function Form(props) {
    const [formstate, setformState] = useState({
        tagTerm: ''
    })

    const handleChange = (event)=>{
        setformState({tagTerm: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventdefault()
        props.getGiph(formstate.tagTerm)

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='tagTerm' value={formstate.tagTerm} onChange={handleChange} placeholder='Enter TagTerm'/>
            <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}
