import React from 'react'
import {FaMobileAlt,FaTerminal,FaFlask } from "react-icons/fa";
import {FaGraduationCap, FaCommentDots, FaLanguage} from "react-icons/fa"
import { FaHtml5 ,FaJsSquare, FaCss3Alt, FaLinux, FaReact, FaPython, FaPhp } from "react-icons/fa";
function Ls({command, arg}) {
  switch (arg) {
  case "~":
  return (
    <div className='line'>
        <div className='command'><span className='dol'>$</span> {command}</div>
        <div className='output'>
          <ul>
            <li className='home'><FaTerminal style={{color: "magenta"}}/><span >Skills</span></li>
            <li className='home'><FaFlask style={{color:"red"}}/><span>Projects</span></li>
            <li className='home'><FaCommentDots style={{color: "#00FF00"}}/><span>Contact</span></li>
            <li className='home'><FaGraduationCap style={{color: "yellow"}}/><span>Studies</span></li>
            <li className='home'><FaLanguage style={{color:"cyan"}}/><span>Languages</span></li>
          </ul>
        </div>
     </div>
  )
  case "Skills":
    return (
    <div className='line'>
        <div className='command'><span className='dol'>$</span> {command}</div>
        <div className='output'>
          <ul>
            <li className='home'><FaReact style={{color: '#61DBFB'}} /><span>React</span></li>
            <li className='home'><FaJsSquare style={{color: 'yellow'}}/> <span>Js</span></li>
            <li className='home'><FaPython style={{color: 'cyan'}}/> <span>Python</span></li>
            <li className='home'><FaHtml5 style={{color: '#e34c26'}} /> <span>Html</span></li>
            <li className='home'><FaCss3Alt style={{color: '#264de4'}}/> <span>Css</span></li>
            <li className='home'><FaLinux style={{color: 'yellow'}} /> <span>Linux</span></li>
            <li className='home'><FaPhp style={{color: 'pink'}}/> <span>Php</span></li>
            <li className='home'> <span>C++</span></li>
          </ul>
        </div>
     </div>)
  case "Contact":
      return (
    <div className='line'>
        <div className='command'><span className='dol'>$</span> {command}</div>
        <div className='output'>
          <ul>
            <li>
            <a href = "mailto: ysaadaou@gmail.com">ysaadaou@gmail</a>
            </li>
            <li><FaMobileAlt/>0624164940</li>
          </ul>
        </div>
     </div>)
  
  case "Languages":
        return (
        <div className='line'>
        <div className='command'><span className='dol'>$</span> {command}</div>
        <div className='output'>
          <ul>
            <li>French</li>
            <li>English</li>
            <li>Arabic</li>
          </ul>
        </div>
     </div>      
        )

    default:
      break
  }
}

export default Ls
