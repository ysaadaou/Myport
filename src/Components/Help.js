import React from 'react'

function Help({command}) {
  return (
    <div>
            <div className="command"><span className='dol'>$ </span>{command}</div>
            <ul>
              <li>ls to list the directories</li>
              <li>pwd to print the curent working Directory</li>
              <li>cd + folder name  to change the Directory</li>
              <li>clear to clear the window</li>
              <li>whoami more info about me</li>
            </ul>
    </div>
  )
}

export default Help
