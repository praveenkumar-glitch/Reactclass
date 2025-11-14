import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

const Count = () => {
    let [word,setword]=useState('')
    let [res,setres]=useState('')
    function fin(){
        for(let i=1;i<word.length-1;i++){
            let a = word.length;
            setres(a)
        }
    }
    
  return (
    <div>
      <input placeholder='Enter the word' onChange={(e)=>setword(e.target.value)}/>
      <Button onClick={fin}>Count</Button>
      <p>{res}</p>
    </div>
  )
}

export default Count
