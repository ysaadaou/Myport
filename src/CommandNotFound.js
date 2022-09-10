import React from 'react'

function CommandNotFound({command}) {
  return (
    <>
      <div className='command'><span className='dol'>$</span> {command}</div>
      <div className='error'>
      commmand not found!!! 
      </div>
    </>
  )
}

export default CommandNotFound
