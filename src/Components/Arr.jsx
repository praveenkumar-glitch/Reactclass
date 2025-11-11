import React, { use, useState } from 'react'

const Arr = () => {
    let names=['Praveen','Sanjeev','Yashwant','Dhanush']
    let [list, setlist]=useState(names)
    let [addname, setaddname]=useState('')
    let [remove, setremove]=useState('')

    function save(){
        setlist([...list, addname])
        setaddname('');
    }

    function del(){
        let fill=list.filter(ele=>ele!=remove)
        setlist(fill);
        setremove('')
    }
    return (
    <div>
      <input placeholder='Name' onChange={(e)=>setaddname(e.target.value)}value={addname}/>
     <button onClick={save}>Save</button>
     <br />
     <br />

      <input placeholder='Name' onChange={(e)=>setremove(e.target.value)}value={remove}/>
      <button onClick={del}>Remove</button>
      <br />
      <br />
      {
        list.map(nam=><p>{nam}</p>)
      }
    </div>
  )
}

export default Arr
