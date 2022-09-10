import React from 'react'
import Head from '../Head'

function Skills({arg, command,hist}) {
  return (
    <>
    <Head arg={arg} /> 
    <div className='command'><span className='dol'>$</span> {command}</div>
    </>
  )
}

export default Skills