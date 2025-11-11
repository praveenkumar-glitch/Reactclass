import React, { useState } from 'react'

const Math = () => {
    const [num1, setnum1] = useState()
    const [num2, setnum2] = useState()
    const [res, setres] = useState('000')

    function Add(){
        let a=parseInt(num1)+parseInt(num2)
        setres(a)
    }
    function Sub(){
        let a=parseInt(num1)-parseInt(num2)
        setres(a)
    }
    function mul(){
        let a=parseInt(num1)*parseInt(num2)
        setres(a)
    }
    function divi(){
        let a=parseInt(num1)/parseInt(num2)
        setres(a)
    }

  return (
    <div>
      <input placeholder='number' onChange={(e)=>setnum1(e.target.value)}/>
      <input placeholder='number' onChange={(e)=>setnum2(e.target.value)}/>
      <button onClick={Add}>+</button>
      <button onClick={Sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={divi}>/</button>
      <br />
      <br />
      <button>{res}</button>
    </div>
  )
}

export default Math
