import React, { useEffect, useState } from 'react'

const UseEff = () => {
      let [findtheme,setFindTheme]=useState(localStorage.getItem('THEMEVIEW')||'light')
      let [theme,setTheme]=useState('')
        function themeHandler(){
            console.log(theme);
            localStorage.setItem('THEMEVIEW',theme)
            // localStorage.clear()
        }
        let [siz,setSiz]=useState(20)
        // useEffect(()=>{
        //     console.log('useEffect is working');
        //     console.log('useeff without dependency');
        // })
        //     useEffect(()=>{
        //     console.log('useEffect is working');
        //     console.log('useeff empty dependency');
        // },[])
             useEffect(()=>{
            console.log('useEffect is working');
            console.log('useeff empty dependency');
                 setFindTheme(localStorage.getItem('THEMEVIEW'))            
        },[theme])

  return (
    <div className="App" style={{backgroundColor:findtheme=='dark'?'black':'white', color:findtheme=='dark'?'white':'black'}}>
        <input onChange={(e)=>setTheme(e.target.value)}/>
        <button onClick={themeHandler}>Set theme</button>
        <p style={{fontSize:`${siz}px`}}>useEffect example</p>
        <button onClick={()=>setSiz(siz=>siz+1)}>+</button>
        {/* <button onClick={()=>localStorage.removeItem('THEMEVIEW')}>remove bg</button> */} 
    </div>
  )
}

export default UseEff
