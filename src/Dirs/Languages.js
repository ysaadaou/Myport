import React from 'react'
import Head from '../Head'
function Languages({arg, command}) {
  return (
    <div>
      
        <Head arg={arg} /> 
        <div className='command'><span className='dol'>$</span> <span className='cmd'>{command}</span></div>
    </div>
  )
}

export default Languages
