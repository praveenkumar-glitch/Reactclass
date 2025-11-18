import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Formdata = () => {

    let navigate=useNavigate()

    let [user,setUser]=useState({
        name:'',
        age:'',
        gender:'',
        lang:'',
      
    })

    function handleChange(e){
        console.log(e.target.value);

        setUser({...user,[e.target.name]:e.target.value})

        console.log(user);

        
        
    }

    function saveform(e){
        e.preventDefault()
        console.log(user);


        // navigate('/anagram')
                // navigate('/anagram',{state:user.name})


                                navigate('/anagram',{state:{username:user.name, value:'listen'}})


        setUser({
        name:'',
        age:'',
        gender:'',
        lang:'',
      
    }) 
    
    
    }
  return (
    <div>
        <form onSubmit={saveform}>
            <input onChange={handleChange} name='name' value={user.name}  />
                <input onChange={handleChange} name='age' value={user.age}  />

                <label><input type='radio' name='gender' value='male' 
                checked={user.gender=='male'} onChange={handleChange}/>Male</label>

                 <label><input type='radio' name='gender' value='female'
                  checked={user.gender=='female'} onChange={handleChange}/>Female</label>

                 <select name='lang' onChange={handleChange}>
                    <option value=''>Select lang</option>
                    <option value='Tamil'>Tamil</option>
                    <option value='English'>English</option>
                 </select>
                 <button>submit</button>
        </form>
    </div>
  )
}

export default Formdata
