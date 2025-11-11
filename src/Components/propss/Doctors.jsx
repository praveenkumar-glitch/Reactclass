import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Doctors = (props) => {
  return (
    <div>
      {
        props.doc.map(d=><div>
            <p>{d.doctorName}</p>
            <p>{d.specialist}</p>
            <p>{d.yearsOfExperience}</p>
            <Button>Bookk appoinment</Button>
            </div>)
      }
    </div>
  )
}
export default Doctors