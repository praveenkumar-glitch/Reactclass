import React, { useState } from 'react'

const Pro = () => {
    const [a, seta] = useState()
    const [b, setb] = useState()
    const [c, setc] = useState()
    const [d, setd] = useState()

    function call(){

         setd(b-a)

        if(a<b){
            setc("Profit");
        }
        else if(a==b){
            setc("No Profit or Loss");
        }
        else{
            setc("Loss");
        }
    }

  return (
    <div>
      <input placeholder='price' onChange={(e)=>seta(e.target.value)}/>
      <input placeholder='Sellprice' onChange={(e)=>setb(e.target.value)}/>
      <button onClick={call}>Click</button>
      <h4>{c}:{d}</h4>
    </div>
  )
}

export default Pro
