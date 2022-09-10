import React from 'react'
import Head from '../Head'
function Contact({arg, command}) {
  return (
    <div>
        <Head arg={arg} /> 
        <div className='command'><span className='dol'>$</span> {command}</div>
    </div>
  )
}

export default Contact
