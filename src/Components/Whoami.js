
function Whoami({command}) {
  return (
    <>
    <div className="line">
        <div className="command"><span className='dol'>$ </span>{command}</div>
        <div className="output whoami">
          <img src={require('./Mypic.jpg')} alt="mypic"/>  
           <p className='desc'> My name is yahya I'm 22 years old, I'm an IT student and I'm passionate about programming and IT in general.
            During My edicational path I gained a solid foundation of the basics of programming.</p>
        </div>  
    </div>
    </>
  )
}

    export default Whoami