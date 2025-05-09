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

function delItem(index){
    const newItems = textList.filter((_,i) => i !== index)
    setStatus(true)
    setTimeout(()=>{setStatus(false)},3000)
    setTextList(newItems)
}
  return (
    <>
      <h1 className='main'>To Do List</h1>
      <Form sendinputext={inputtext} />
      {status && <Alertdel/>}
      <List textInput={textList} delfunction={delItem}/>
    </>
  )
}

export default App
