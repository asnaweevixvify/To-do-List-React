import { useEffect, useState } from 'react'
import './App.css'
import Alertadd from './alertadd'

function Form(props){
    const [text,setText] = useState('')
    const [status,setStatus] = useState(false)
    const textEdit = props.editText
    useEffect(()=>{
        setText(textEdit)    
    },[textEdit])

    return(
        <>
        <div className='form-container'>
            <input type='text' onInput={inputType} value={text}></input>
            <button type='button' onClick={sendText}><h2>{textEdit?'แก้ไขข้อมูล':'บันทึกข้อมูล'}</h2></button>
        </div>
        {status && <Alertadd/>}
        </>
    )
    
    function inputType(e){
        setText(e.target.value)
    }
    function sendText(){
        textEdit?props.sendEdittext(text):props.sendinputext(text)
        setStatus(true)
        setTimeout(() => setStatus(false), 3000)
        setText('')
    }
}

export default Form