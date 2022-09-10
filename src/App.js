import { useState } from "react";
import Body from "./Body";
import Line from "./Components/Line";
import Liiine from "./Liiine";
import Output from "./Output";


function App() {
//Hooks***************************************************/
const [val, setVal] = useState('')   // for the value of the input
const [hist, setHist] = useState([])    // the history of the entred commands 
const [command, setCommand] = useState('') // to get the first word of the command
let [arg, setArg] = useState('~')
//*************************************************** */



///handle submit functino 


const handleClear = () => {
  setHist([])
}
  const handleSubmit = (e) => {
    if(e.key === "Enter"){
      switch (command) {
        case "cd Skills":
           setArg("Skills")

          break
        case "cd ..":
          setArg("~")
          break
        case "cd Contact":
          setArg("Contact")
          break
        case "cd Languages":
          setArg("Languages")
          break
      }
      const term = hist
      if(command !==''){
        term.push({cmd: command, arg: arg})
        setHist(term)
        console.log(hist)
      }

      if(command === "clear"){
        setHist([])
      }
      setCommand('')
      setCommand(val)
      setVal('')

    }
  }

  
  //handle the change of the input
  const handleChange = (e) => {
    setVal(e.target.value)
  }

  
  return (
    <div className="App">
      <Body arg={arg} hist={hist} command={command}/>

      <Output 
        arg={arg}
        command = {command} 
        handleSubmit={handleSubmit} 
        val={val} handleChange={handleChange} 
        handleClear={handleClear}
        hist={hist}
      />
      <Liiine arg={arg} handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
    </div>
  );
}

export default App;
