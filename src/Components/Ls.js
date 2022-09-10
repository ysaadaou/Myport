import React from 'react'
import {FaPhoneAlt } from "react-icons/fa";
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
            <li>Skills</li>
            <li>Projects</li>
            <li className='home'><FaCommentDots/><span>Contact</span></li>
            <li className='home'><FaGraduationCap/><span>Studies</span></li>
            <li className='home'><FaLanguage/><span>Languages</span></li>
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
            <li><FaReact style={{color: '#61DBFB'}} />React</li>
            <li><FaJsSquare style={{color: 'yellow'}}/>Js</li>
            <li><FaPython style={{color: 'cyan'}}/>Python</li>
            <li><FaHtml5 style={{color: '#e34c26'}} />Html</li>
            <li><FaCss3Alt style={{color: '#264de4'}}/>Css</li>
            <li><FaLinux style={{color: 'yellow'}} />Linux</li>
            <li><FaPhp style={{color: 'pink'}}/>Php</li>
            <li>C++</li>
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
            <li><FaPhoneAlt/>0624164940</li>
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
