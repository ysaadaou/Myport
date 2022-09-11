import React from 'react'
import Head from '../Head'

function Line({arg,handleChange, handleSubmit, val, command}) {
  return (
    <div>
    <form onSubmit={(e)=>{e.preventDefault()}}>
      {command !== "clear" ? (<Head arg={arg} />) : <></> }
      <div className='l'>
      <div className='dol'>$</div>
      <input type="text" value={val} onChange={handleChange} onKeyPress={handleSubmit}  autoFocus/>
      </div>
    </form>
    </div>
  )
}

export default Line
