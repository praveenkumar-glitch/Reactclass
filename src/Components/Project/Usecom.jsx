import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'

const Usecom = () => {
    const[num,setnum]=useState(0)
    const[bgcolor,setbgcolor]=useState('')
  return (
    <div style={{backgroundColor:bgcolor}}>
        <input placeholder='Enter the number' onChange={(e)=>setnum(e.target.value)}/>
        <br />
        <Button onClick={()=>setnum(va=>va-1)}>-</Button>
        <p>{num}</p>
        <Button onClick={()=>setnum(va=>va+1)}>+</Button>
        <br />
        <Button style={{margin:"5px"}} onClick={()=>setbgcolor('green')}>green</Button>
        <Button style={{margin:"5px"}} onClick={()=>setbgcolor('purple')}>purple</Button>
        <Button style={{margin:"5px"}} onClick={()=>setbgcolor('yellow')}>yellow</Button>
    </div>
  )
}

export default Usecom
