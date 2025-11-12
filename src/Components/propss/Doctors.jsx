import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Doctors = (props) => {
  return (
    <div style={{backgroundColor:props.bg ? 'white': 'black'}}>
      {
        props.doc.map(d=><div>
            <p>{d.doctorName}</p>
            <p>{d.specialist}</p>
            <p>{d.yearsOfExperience}</p>
            <Button>Bookk appoinment</Button>
            </div>)
      }

      <Button onClick={props.changBg}>Switch theme</Button>
    </div>
  )
}
export default Doctors