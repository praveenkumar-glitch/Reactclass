import Button from "react-bootstrap/Button"; 
import React, { useState } from 'react'

const Sub = (props) => {
    const[click,setclick]=useState(true)
    const[color, setcolor]=useState('')
  return (
    <div style={{backgroundColor:props.bg ? 'white' : 'black'}}>
        <div style={{marginLeft:"650px"}}>
        {
           click &&  props.name.map(b=><div style={{margin:'10px',backgroundColor:'gray',width:'200px',height:'150px',borderRadius:"10px"}}>
                <h4>{b.brand}</h4>
                <p>Color :{b.color}</p>
                <p>CC :{b.cc}</p>
                <p>Price :{b.price}</p>
           </div>) 
        }  
        </div>  
        <Button onClick={()=>setclick(!click)}>{click ? 'hide' : 'show'}</Button>
        <br />  
        <Button onClick={props.bcolor}>Changecolor</Button>
        <br />
    </div>
  )
}

export default Sub
