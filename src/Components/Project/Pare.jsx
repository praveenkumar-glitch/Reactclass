import React, { useState } from 'react'
import Ch from './Ch'

const Pare = () => {
  const[color,setcolor]=useState(true)

  function changecolor(){
    setcolor(!color)
  }
    let word=[
        {
            brand:"Asus",
            price:50000,
            storage:"1TB",
            ram:"16GB"
        },
        {
            brand:"Dell",
            price:55000,
            storage:"512GB",
            ram:"8GB"
        },
        {
            brand:"HP",
            price:45000,
            storage:"512GB",
            ram:"8GB"
        },
        {
            brand:"Lenovo",
            price:35000,
            storage:"510GB",
            ram:"4GB"
        }
    ]
  return (
    <div>
      <Ch name={word} bg={color} fname={changecolor}/>
    </div>
  )
}

export default Pare
