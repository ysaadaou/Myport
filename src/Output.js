import React from 'react'
import CommandNotFound from './CommandNotFound'
import Ls from './Components/Ls'
import Whoami from './Components/Whoami'
import Head from './Head'
import Dir from './Dir'

function Output({ command, arg, hist}) {
    switch (command.split(' ')[0]){
      case "ls":
       return (

        <>
          <Head arg={arg} /> 
          <Ls command={command} arg={arg}/>
        </>
      )
        break
      case "cd":

        return(
          <> 
            <Dir arg={arg} command={command} hist={hist}/>
          </>
        )
      case "pwd":
        console.log("pwd")
        break
      case "clear":
        return (<Head arg={arg} />)
        break
      
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
