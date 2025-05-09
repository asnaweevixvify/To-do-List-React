import { useState } from 'react'
import './App.css'

function List(props){
    const text = props.textInput
    const [status,setStatus] = useState(false)
    const [idsoft,setIdSoft] = useState('')
    return(
        <ul>
            {text.map((e,index)=>{
                return(<li key={index} className={idsoft === index ? status ? 'soft' : 'show' : null}>{e}
                    <div className='icon'>
                        <i className="fa-solid fa-pen fa-xs" onClick={()=> props.editfunction(e,index)}></i> 
                        <i className="fa-solid fa-trash fa-xs" onClick={()=>props.delfunction(index)}></i>
                        <input type='checkbox' className='check' onChange={()=>setSoft(index)}></input>
                    </div>
                    </li> 
                )
            })}
        </ul>
    )
    function setSoft(i){
        setStatus(!status)
        setIdSoft(i)
    }
}

export default List