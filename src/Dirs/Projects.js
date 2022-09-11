import React from 'react'
import Head from '../Head'
function Projects({arg, command}) {
  return (
    <>
      
        <Head arg={arg} /> 
        <div className='command'><span className='dol'>$</span> <span className='cmd'>{command}</span></div>
    </>
  )
}

export default Projects
