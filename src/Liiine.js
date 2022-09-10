import React from 'react'
import Line from './Components/Line'
function Liiine({arg,handleSubmit, val , handleChange,command}) {
    switch (command) {
        case "cd Skills":
            return <Line arg="Skills" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        case "cd ..":
            return <Line arg="~" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        case "cd Contact":
            return <Line arg="Contact" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        case "cd Languages":
            return <Line arg="Languages" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        default:
            return <Line arg={arg} handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />


    }
}

export default Liiine
