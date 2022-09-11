import React from 'react'
import CommandNotFound from './CommandNotFound'
import Ls from './Components/Ls'
import Whoami from './Components/Whoami'
import Head from './Head'
import Dir from './Dir'
import Pwd from './Components/Pwd'

function Output({ command, arg, hist}) {
    switch ((command.split(' ')[0]).toLowerCase()){
      case "ls":
       return (

        <>
          <Head arg={arg} /> 
          <Ls command={command} arg={arg}/>
        </>
      )
      case "cd":

        return(
          <> 
            <Dir arg={arg} command={command} hist={hist}/>
          </>
        )
      case "pwd":
        return (
          <>
            <Head arg={arg} />
            <Pwd arg={arg} command={command}/>
          </>
        )
      case "clear":
        return (<Head arg={arg} />)
      
      case "cat":
        console.log("cat")
        break
      case "whoami":
        return (
          <>
        <Head  arg={arg}/>
        <Whoami command={command} />
        </>
        )

      case "":
        break
      


        
   default:
      return (
        <>
          <Head />
          <CommandNotFound command={command}/>
        </>)

      
}
}
export default Output
