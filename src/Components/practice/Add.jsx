import React from 'react'

const Add = (props) => {
  return (
    <div>
        {
      props.ad.map(d=><div>
        <p>{d.city}</p>
        <p>{d.pin}</p>
      </div>)
      }
    </div>
  )
}

export default Add
