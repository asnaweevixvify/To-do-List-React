import { useState } from 'react'
import './App.css'
import Form from './form'
import List from './list'
import Alertdel from './alertdel'

function App() {
  function inputtext(text){
    setTextList([...textList,text])
  }
const [textList,setTextList] = useState([])
const [status,setStatus] = useState(false)
const [textEdit,setTextedit] = useState('')
const [indexEdit,setIndexedit] = useState('')


function delItem(index){
    const newItems = textList.filter((_,i) => i !== index)
    setStatus(true)
    setTimeout(()=>{setStatus(false)},3000)
    setTextList(newItems)
}
function editItem(text,index){
  setTextedit(text)
  setIndexedit(index)
}
function sendEditText(edittext){
  const newList = textList.map((e,index)=>{
    if(index === indexEdit){
      return edittext
    }
    return e
  })
  setTextList(newList)        
  setTextedit('')             
  setIndexedit('')           
}
  return (
    <>
      <h1 className='main'>To Do List</h1>
      <Form sendinputext={inputtext} editText={textEdit} sendEdittext={sendEditText}/>
      {status && <Alertdel/>}
      <List textInput={textList} delfunction={delItem} editfunction={editItem}/>
    </>
  )
}

export default App
