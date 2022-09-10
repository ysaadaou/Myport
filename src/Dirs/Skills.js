import React from 'react'
import Head from '../Head'

function Skills({arg, command}) {
  return (
    <>
    <Head arg={arg} /> 
    <div className='command'><span className='dol'>$</span> {command}</div>
    </>
  )
}

export default Skills