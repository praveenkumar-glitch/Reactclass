import { Button } from 'bootstrap'
import React, { useState } from 'react'

const Tax = () => {
    const [salary, setsalary]=useState('')
    const [out, setout]=useState('')
    function calu(){
        if(salary>0 && salary<=5000){
            setout("No tax");
        }
        else if(salary>5000 && salary<=10000){
            setout((salary/100)*10);
        }
        else if(salary>10000 && salary<=20000){
            setout((salary/100)*20);
        }
        else{
            setout((salary/100)*30);
        }
    }
  return (
    <div>
      <input placeholder='Salary' onChange={(e)=>setsalary(e.target.value)}/>
      <button onClick={calu}>Click</button>
      <h4>{out}</h4>  
    </div>
  )
}

export default Tax
