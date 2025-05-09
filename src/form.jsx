import { useState } from 'react'
import './App.css'
import Alertadd from './alertadd'

function Form(props){
    const [text,setText] = useState('')
    const [status,setStatus] = useState(false)
    return(
        <>
        <div className='form-container'>
            <input type='text' onInput={inputType} value={text}></input>
            <button type='button' onClick={sendText}><h2>เพิ่มข้อมูล</h2></button>
        </div>
        {status && <Alertadd/>}
        </>
    )
    function inputType(e){
        setText(e.target.value)
    }
    function sendText(){
        props.sendinputext(text)
        setStatus(true)
        setTimeout(() => setStatus(false), 3000)
        setText('')
    }
}

export default Form