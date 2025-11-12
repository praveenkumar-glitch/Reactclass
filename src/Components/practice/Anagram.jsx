import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Anagram = () => {
    const[nameone, setnameone]=useState('')
    const[nametwo, setnametwo]=useState('')
    const[result, setresult]=useState('')

    function fun(){
        let a=[]
        let b=[]
        for(let i=1;i<nameone.length-1;i++){
            a.push(nameone.toLowerCase[i]);
        }
        for(let j=1;j<nametwo.length-1;j++){
            b.push(nametwo.toLowerCase[j]);
        } 
        
        a.sort();
        b.sort();

        if(a.toString()===b.toString()){
        setresult("Anagram")
    }
    else{
        setresult("Not anagram")
    }
    }
    
    
  return (
    <div>
      <input placeholder='Enter the word' onChange={(e)=>setnameone(e.target.value)}/>
      <input placeholder='Enter the word' onChange={(e)=>setnametwo(e.target.value)}/>
      <Button onClick={fun}>Click</Button>
      <p>Result:{result}</p>
    </div>
  )
}

export default Anagram
