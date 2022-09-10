import Contact from './Dirs/Contact'
import Dot from './Dirs/Dot'
import Languages from './Dirs/Languages'
import Skills from './Dirs/Skills'

function Dir({arg, command, hist}) {

 switch (command.split(' ')[1]) {
            case "Skills":
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
            case "Contact":
                return (
                    <>
                        <Contact arg={arg} command={command}/>
                    </>
                )
            case "Languages":
                return (
                    <Languages arg={arg} command={command} />
                )
            default:
                break
        }
}

export default Dir
