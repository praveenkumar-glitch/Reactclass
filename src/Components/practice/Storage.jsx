import React, { useState } from 'react'
import Cookies from 'js-cookie'

const Storage = () => {

    let [theme,setTheme]=useState('')

    function themeHandler(){

        localStorage.setItem('THEMEVIEW',theme)

        // localStorage.clear()

    }

    let product={
        id:101,
        title:'smartphnoe',
        prize:20000
    }

    localStorage.setItem('prod',JSON.stringify(product))


    let getprod=JSON.parse(localStorage.getItem('prod'))
    console.log(getprod);

     Cookies.set('name','hellow', { expires: 2 })

     //Cookies.get('name')
     //Cookies.remove('name')
    
  return (

    <div>

        <input onChange={(e)=>setTheme(e.target.value)}/>
        <button onClick={themeHandler}>Set theme</button>

        <button onClick={()=>localStorage.removeItem('THEMEVIEW')}>remove bg</button>

      


      
    </div>
  )
}

export default Storage


//sessionStorage.getItem, setItem, removeItem and clear


//npm i js-cookie