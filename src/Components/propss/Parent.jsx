import React, { useState } from 'react'
import Child from './Child'
import Doctors from './Doctors'
import BookAppoint from './BookAppoint'
import { Button } from 'react-bootstrap'

const Parent = () => {

  let [theme,setTheme]=useState(false)

  function switchTheme(){
    setTheme(!theme)
  }

    let name='praveen'
    let age=20

    let doctors = [
  {
    doctorName: "Dr. Rajesh Kumar",
    specialist: "Cardiologist",
    yearsOfExperience: 12
  },
  {
    doctorName: "Dr. Meena Sharma",
    specialist: "Dermatologist",
    yearsOfExperience: 8
  },
  {
    doctorName: "Dr. Arjun Reddy",
    specialist: "Orthopedic Surgeon",
    yearsOfExperience: 15
  },
  {
    doctorName: "Dr. Priya Nair",
    specialist: "Pediatrician",
    yearsOfExperience: 10
  },
  {
    doctorName: "Dr. Sanjay Patel",
    specialist: "Neurologist",
    yearsOfExperience: 18
  }
];

let services = [
  "ECG",
  "Heart Checkup",
  "Blood Pressure Monitoring",
  "Skin Allergy Test",
  "Acne Treatment",
  "Laser Therapy",
  "Joint Replacement",
  "Bone Fracture Treatment",
  "Arthroscopy",
  "Child Vaccination",
  "Growth Monitoring",
  "General Consultation",
  "EEG Test",
  "Migraine Treatment",
  "Nerve Disorder Diagnosis"
];

console.log(services);


console.log(doctors);

  return (
    <div>
      <p>this is parent page</p>
      <Child name={name} old={age} />
      <Doctors doc={doctors} bg={theme} changBg={switchTheme}/>
      <BookAppoint>      
       <div>
         {
            services.map(elm=><Button className='m-3'>{elm}</Button>)
        }
       </div>
      </BookAppoint>

      <BookAppoint>
        <>
        <p>This is my page with differnt child passing</p>
        </>
      </BookAppoint>
    </div>
  )
}

export default Parent
