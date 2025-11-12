import React from 'react'
import { Button } from 'react-bootstrap'

const Ch = (props) => {
  return (
    <div style={{backgroundColor:props.bg?'white':'purple'}}>/
    <div style={{display:'flex'}}>
      {
        props.name.map(lap=><div style={{backgroundColor:"gray",width:"300px",height:"250px",margin:"15px",borderRadius:'10px',display:'grid'}}>
            <p>Brand :{lap.brand}</p>
            <p>Price :{lap.price}</p>
            <p>Storage :{lap.storage}</p>
            <p>Ram :{lap.ram}</p>
            <Button>Buy Now</Button>
        </div>)
      }
      </div>
      <Button onClick={props.fname}>ChangeColor</Button>
    </div>
  )
}

export default Ch
