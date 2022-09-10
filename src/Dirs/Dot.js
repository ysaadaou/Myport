import React from 'react'
import Head from '../Head'
function Dot({arg, hist, command}) {
  return (
   <> 
    <Head arg={arg} /> 
    <div className='command'><span className='dol'>$</span> {command}</div>
    </>
  )
}

export default Dot
