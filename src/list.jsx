import { useState } from 'react'
import './App.css'

function List(props){
    const text = props.textInput
    return(
        <ul>
            {text.map((e,index)=>{
                return(<li key={index}>{e}
                    <div className='icon'>
                        <i className="fa-solid fa-pen fa-xs" onClick={()=> props.editfunction(e,index)}></i> 
                        <i className="fa-solid fa-trash fa-xs" onClick={()=>props.delfunction(index)}></i>
                    </div>
                    </li> 
                )
            })}
        </ul>
    )
}

export default List