import React from 'react'

function Pwd({arg, command}) {
  switch (arg.toLowerCase()) {
    case "skills":
        return (
            <>
            <div className="command"><span className='dol'>$ </span>{command}</div>
            <p>Your are in My Cs Skills Directory. Go a head and list my skills by using ls</p>
            </>
        )
    case "~":
        return (
        <>
            <div className="command"><span className='dol'>$ </span>{command}</div>
            <p>Weclome Home</p>
        </>
        )
    case "contact":
        return (
        <>
            <div className="command"><span className='dol'>$ </span>{command}</div>
            <p>You can contact me any time</p>
        </>
        )

    case "languages":
        return (
            <p>I hate french lol but I can speak it very well</p>
        )

    case "Studies":
        return (
            <p>You are in my studies folder</p>
        )
    case "Projects":
        return (
            <p>you are in my Projects folder</p>
        )
    default:
        return (
            <p>You are no where</p>
        )


  }
  
}

export default Pwd
