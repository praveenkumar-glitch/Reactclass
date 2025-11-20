import React, { useEffect, useState } from 'react'
import { use } from 'react'

const Todo = () => {
    let [task,setTask]=useState('')

    let [todo,setTodo]=useState([])

    function AddTodo(){

const currentTime = Date.now();
        
        let mytask={id:currentTime, title:task,iscompleted:false}
        
        setTodo([...todo,mytask])

        setTask('')


    }

    useEffect(()=>{
        let savedTodo=localStorage.getItem('todos')

        console.log(savedTodo);
        

        if(savedTodo){
            console.log(savedTodo);
            
            let temp=JSON.parse(savedTodo)
            setTodo(temp)
        }

//it will run at first render
    },[])


    useEffect(()=>{


        if(todo.length){
        localStorage.setItem('todos',JSON.stringify(todo))

        console.log('datasaving', todo);
        //first render as well as todo changes
        }

    },[todo])
  return (
    <div>
      

      <input name='task' value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={AddTodo}>Add</button>


      {
        todo && todo.map(t=><div>

            <label>{t.title}</label>
            <input type='checkbox' checked={t.iscompleted} />
            <button>X</button>

            
             </div>)
      }
    </div>
  )
}

export default Todo
