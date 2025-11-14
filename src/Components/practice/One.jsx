import React, { useState } from 'react'
import Chi from './Chi'
import Add from './Add'
import { Button } from 'react-bootstrap'
import Mul from './Mul'
const One = () => {
  const[bgcolor,setbgcolor]=useState(true)

  function change(){
    setbgcolor(!bgcolor)
  }
    let name="parveen"
    let age=21
    let address=[
        {
            city:"Tiruppur",
            pin:641670
        }
    ]
    let degeree=[
        "B SC IT",
        "B COM CA",
        "B SC CT"
    ]
  return (
    <div>
      <Chi name={name} age={age}/>
      <Add ad={address} bg={bgcolor} background={change}/>
      <Mul>
        <div>
            {
                degeree.map(de=><Button className='m-2'>{de}</Button>)
            }
        </div>
      </Mul>
    </div>
  )
}

export default One
