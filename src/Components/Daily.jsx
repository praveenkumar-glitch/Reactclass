import React, { useState } from 'react'

const Daily = () => {

    const[name,setname]=useState('')
    const[reverse,setreverse]=useState('')
    const[total,settotal]=useState(0)
    const[vowels,setvowels]=useState('')
    const[lower,setlower]=useState('')
    const[upper,setupper]=useState('')
    const[pol,setpol]=useState('')
    const[color,setcolor]=useState('')
    const[large,setlarge]=useState('')
    function find(){
        let res=('')
       for(let i=name.length-1;i>=0;i--){
        res+=name.charAt(i);
       }
       setreverse(res)


       let num=0;
        for(let i=0;i<=name.length-1;i++){
            num++
        }
        settotal(num)


        let sum=0;
        let vowel=['a','e','i','o','u']
        for(let i=0;i<=name.length-1;i++){
        if(vowel.includes(name[i].toLowerCase())){
            sum++;
        }
        setvowels(sum)
    }

    let lo =  name.toLowerCase()
     setlower(lo)

     let upp =  name.toUpperCase()
     setupper(upp)

     if(name===res){
        setpol("Palindrome ")
     }
     else{
        setpol("Not Palindrome ")
     }
    

    let word=name.split(" ")
    let lag=word[0]

    for(let i=1;i<word.length;i++){
      if(word[i].length>lag.length){
        lag=word[i];
      }
      setlarge(lag)
    }
  }
  return (
    <div style={{backgroundColor:color}}>
      <input placeholder='Enter the word' onChange={(e)=>setname(e.target.value)}/>
      <button onClick={find}>click</button>
      <p>Reverse :{reverse}</p>
      <br />
      <p>Total letters :{total}</p>
      <br />
      <p>Total vowels :{vowels}</p> 
      <br />
      <p>LowerCase :{lower}</p>
      <br />
      <p>UpperCase :{upper}</p>
      <br />
      <p>Palindrome or Not :{pol}</p>
      <br />
      <p>Large String :{large}</p>
      <br />
      <button onClick={()=>setcolor('green')}>Green</button>
      <button onClick={()=>setcolor('yellow')}>yellow</button>
      <button onClick={()=>setcolor('red')}>red</button>
      <button onClick={()=>setcolor('white')}>white</button>

    </div>
  )
}

export default Daily
