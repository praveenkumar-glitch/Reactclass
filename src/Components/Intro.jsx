import React, { useState } from 'react'

function Intro() {
    let name="praveen"
    let age=21
    let lan="Java"

    const [name1, setname1] = useState('name')
    function user(){

    }

  return (
    <div>
        <div className='bg-danger' w='100px'>
      <h1>React</h1>
      <h5>Details</h5>
      <p>Name :{name}</p>
      <p>Age :{age}</p>
      <p>Language :{lan}</p>
      <input placeholder='name' onChange={(e)=>setname1(e.target.value)}/>
      <p>Your name:{name1}</p>

</div>
</div>
  )
}

export default Intro

