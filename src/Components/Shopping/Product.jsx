import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

const Product = () => {
    let pro=[
        {
            name:'Apple',
            price:250,
        },
        {
            name:'Jackfruit',
            price:150
        }
    ]
    const [cart,setcart]=useState([pro])
    const [total,settotal]=useState(0)
    const [name,setname]=useState('')
    const [price,setprice]=useState('')

    function addproduct(){
        if(name && price){
            const newprice=parseInt(price)
            setcart([...cart,{name,price:newprice}]);
            settotal(total+newprice);
            setname('')
            setprice('')
        }
    }
    
    function removeproduct(removename){
        const item=cart.find((item)=>item.name===removename)
        if(item){
            setcart(cart.filter((i)=>i.name !==removename))
            settotal(total-item.price)
        }
    }
  return (
    <div>
      <input placeholder='Enter the product' onChange={(e)=>setcart(e.target.value)}/>
      <Button onClick={addproduct}>Add</Button>
      <p>{total}</p>
      <input placeholder='Enter the product' onChange={(e)=>setcart(e.target.value)}/>
      <Button onClick={removeproduct}>Remove</Button>
      <p>{total}</p>
    </div>
  )
}

export default Product
