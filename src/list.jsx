import { useState } from 'react'
import './App.css'

function List(props){
    const text = props.textInput
    const [listStatus,setListStatus] = useState(Array(text.length).fill(false))
    return(
        <ul>
            {text.map((e,index)=>{
                return(<li key={index} className={listStatus[index] ? 'soft' : 'show' }>{e}
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
        const newList = [...listStatus];
        newList[i] = !newList[i]
        setListStatus(newList)
    }
}

export default List