import React from 'react'
import Line from './Components/Line'
import Output from './Output'
function Body({hist, command, arg}) {
    
  return (
    <>
      
        {command !== "clear" ? hist.map((e) => (
            <Output arg={e.arg} command={e.cmd} key={e.id} />

        )):<></>}
    </>
  ) 
}

export default Body
