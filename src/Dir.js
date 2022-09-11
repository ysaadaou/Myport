import Contact from './Dirs/Contact'
import Dot from './Dirs/Dot'
import Languages from './Dirs/Languages'
import Projects from './Dirs/Projects'
import Skills from './Dirs/Skills'

function Dir({arg, command}) {

 switch (command.split(' ')[1] !== undefined ? command.split(' ')[1].toLowerCase() : command.split(' ')[1]) {
            case "skills":
            return (
                <>
                    <Skills  arg={arg} command={command}/>
                </>
            )
            case "..":
                return (
                    <>
                        <Dot arg={arg} command={command}/>
                    </>
                )
            case "contact":
                return (
                    <>
                        <Contact arg={arg} command={command}/>
                    </>
                )
            case "languages":
                return (
                    <Languages arg={arg} command={command} />
                )
            case undefined:
                return (
                    <>
                        <Dot arg={arg} command={command}/>
                    </>
                )
            case "projects":
                return (
                    <>
                        <Projects arg={arg} command={command} />
                    </>
                )
            default:
                break
        }
}

export default Dir
