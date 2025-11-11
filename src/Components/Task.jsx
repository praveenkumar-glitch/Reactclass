import React, { useState } from 'react'

const Task = () => {
const[unit,setunit]=useState(0)
const [tol, settol]=useState("Amount")
 function find(){
if(unit>0 && unit<=100){
   settol(unit*5)
}
else if(unit>100 && unit<=200){
    settol(unit*7)
}
else{
    settol(unit*10)
}
 }
  return (
    <div>
        <input placeholder='unit' onChange={(e)=>setunit(e.target.value)}/>
        <button onClick={find}>Click</button>
        <button>{tol}</button>
    </div>
  )
}

export default Task
