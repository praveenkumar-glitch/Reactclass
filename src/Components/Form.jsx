import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Form = () => {
    let [user,setUser]=useState({
        name:'',
        age:'',
        gmail:'',
        gender:'',
        skills:''
    })

    function change(e){
        setUser({...user,[e.target.name]:e.target.value})
        console.log(e.target.value);
        console.log(user);
        
    }

    function save(e){
         e.preventDefault()
        setUser(
            {
             name:'',
             age:'',
             gmail:'',
             gender:'',
             skills:''   
            }
        )
    }
  return (
    <div style={{margin:'100px'}}>
        <div>
        <form onSubmit={save}>
        <input placeholder='Enter the name' onChange={change} name='name' value={user.name}/>
        <br />
        <input placeholder='Enter the age' onChange={change} name='age'value={user.age}/>
        <br />
        <input placeholder='Enter the gmail' onChange={change} name='gmail' value={user.gmail}/>
        <br />
        <label>Gender</label>
        <label>
            <input type='radio' name='gender' value='male' checked={user.gender=='male'} onChange={change}/>Male
        </label>
        <label>
            <input type='radio' name='gender' value='female'checked={user.gender=='female'} onChange={change}/>Female
        </label>
        <br />
        <select name='skills'onChange={change}>
            <option value=''>Language</option>
            <option value='Java'>Java</option>
            <option value='Python'>Python</option>
            <option value='React'>React</option>
        </select>
        <button >Submit</button>

      </form>
      </div>
    </div>
  )
}

export default Form
