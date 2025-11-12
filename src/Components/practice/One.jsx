import React from 'react'
import Chi from './Chi'
import Add from './Add'
import { Button } from 'react-bootstrap'
import Mul from './Mul'
const One = () => {
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
      <Add ad={address}/>
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
