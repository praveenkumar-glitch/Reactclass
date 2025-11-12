import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Basic = () => {
    let [isshow,setIsShow]=useState(true)

    let [siz,setSiz]=useState(20)
  return (
    <div>

        <Button onClick={()=>setSiz(val=>val-5)}>-</Button>

       {
        isshow &&  <p style={{fontSize:`${siz}px`}}>Hello this is usestate example</p>
       }


       {
        isshow ? <p>value available</p> :<p>products unavailable</p>
       }
<Button onClick={()=>setSiz(val=>val+5)}>+</Button>


      <button onClick={()=>setIsShow(!isshow)}>{isshow ? 'hide':'show'}</button>
    </div>
  )
}

export default Basic


//counter 