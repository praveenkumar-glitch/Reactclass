import React from 'react'
import { Button } from 'react-bootstrap'

const Add = (props) => {
  return (
    <div style={{backgroundColor:props.bg?'white':'gray'}}>
        {
      props.ad.map(d=><div>
        <p>{d.city}</p>
        <p>{d.pin}</p>
      </div>)
      }
      <Button onClick={props.background} >Changecolor</Button>
    </div>
  )
}

export default Add
