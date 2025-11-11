import React from 'react'

const Child = ({name,old}) => {
  return (
    <div>
        <p>This is child page</p>
      <p>Hey my name is {name}</p>
      <p>my age is {old}</p>
    </div>
  )
}

export default Child
