import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Game = () => {
    let [userone ,setuserone]=useSearchParams('')
    let [usertwo ,setusertwo]=useSearchParams('')
    let [scoreone ,setuscoreone]=useSearchParams(0)
    let [scoretwo ,setscoretwo]=useSearchParams(0)
    let [round,setround]=useState(1)

  return (
    <div>
      
    </div>
  )
}

export default Game
