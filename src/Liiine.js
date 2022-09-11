import React from 'react'
import Line from './Components/Line'
function Liiine({arg,handleSubmit, val , handleChange,command}) {
    switch (command.toLowerCase()) {
        case "cd skills":
            return <Line arg="Skills" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        case "cd ..":
            return <Line arg="~" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        case "cd":
            return <Line arg="~" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        case "cd contact":
            return <Line arg="Contact" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        case "cd languages":
            return <Line arg="Languages" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        case "cd projects":
            return <Line arg="Projects" handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />
        default:
            return <Line arg={arg} handleSubmit={handleSubmit} val={val} handleChange={handleChange} command={command} />


    }
}

export default Liiine
