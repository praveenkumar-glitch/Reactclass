import { useState } from 'react'
import Sub from './Sub'

const Main = () => {
       const[theme,settheme]=useState(true)
        function col(){
            settheme(!theme)
        }
    let Bike=[
        {
            brand:'Royal Enfield',
            cc:350,
            color:'white',
            price:300000
        }
    ]
  return (
    <div>
        <Sub name={Bike} bg={theme} bcolor={col}/>
    </div>
  )
}

export default Main
