import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Navv = () => {
  return (
    <div>
        <h1>This is navv</h1>

        <Link to="" >Home</Link>
        <br />

        <NavLink to='/formdata' style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}> Formdata</NavLink>
        <br />

        <Link to="/game"><Button>game</Button></Link>

    </div>
  )
}

export default Navv
