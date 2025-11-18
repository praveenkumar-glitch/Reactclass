import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const Anagram = () => {
    const[nameone, setnameone]=useState('')
    const[nametwo, setnametwo]=useState('')
    const[result, setresult]=useState('')

let navigate=useNavigate()
            let location=useLocation()
      //    let name = location?.state||'guest'
      //    console.log(name);

      console.log(location.state);
      

      let name=location.state?.username || 'guest'

      let value=location.state?.value || 'thirst'

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
    

    function mathpagehandler(){
      navigate(`/mathpage/12345`)
    }
    
  return (
    <div>

      <p>{name}</p>
      <input placeholder='Enter the word' onChange={(e)=>setnameone(e.target.value)}/>
      <input placeholder='Enter the word' onChange={(e)=>setnametwo(e.target.value)}/>
      <Button onClick={fun}>Click</Button>
      <p>Result:{result}</p>

      <p>{value}</p>

      <button onClick={mathpagehandler}>Go to math page</button>
    </div>
  )
}

export default Anagram
