import './App.scss';
import Header from "./components/Layouts/Header/Header";
import Contact from "./components/Contact/Contact";
import Window from "./components/Window/Window";
import {useState} from "react";

function App() {
  let [value,setValue]=useState(false)
  let [valueChange,setChange]=useState(false)
  let [id,setId]=useState(0)
  let [list,setList]=useState([])
  let [name,setName]=useState('')
  let [Phone,setPhone]=useState('')
  let close=()=>{
    setValue(prev=>!prev)

  }
  let nameChange=(e)=>{
    setName(e)
  }
  let phoneChange=(e)=>{
    setPhone(e)
  }
  let add=()=>{
    if(name!==''&&Phone!==''){
      let el={
        id:Math.floor(Math.random()*10000),
        name,
        Phone,
        word:name.match(/^[a-zа-я]/i)[0],
        background:randomColor()
      }
      let arr=[...list]
      arr.unshift(el)
      setList(arr)
      close()
      setName("")
      setPhone('')
    }

  }
  let randomColor=()=>{
    let red=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    return `rgb(${red},${blue},${green})`
  }
  let clearAll=()=>{
    setList([])
  }
  let clear=(id)=>{
    list.forEach((el,i)=>{
      if(el.id===id){
        let arr=[...list]
        arr.splice(i,1)
        setList(arr)
      }
    })
  }
  let toChange=()=>{
    list.forEach((el,i)=>{
      if(el.id===id){
        let arr=[...list]
        if(name!==''){
          arr[i].name=name
          arr[i].word=name.match(/^[a-zа-я]/i)[0]
            arr[i].background=randomColor()
          if(Phone!==''){
            arr[i].Phone=Phone
          }
        }

        setList(arr)
        setChange(prev=>!prev)
        setValue(prev=>!prev)
        setId(0)

      }
    })
  }
  let click=(id)=>{
    setValue(prev=>!prev)
    setChange(prev=>!prev)
    setId(id)
    setName("")
    setPhone('')
  }
  return (
    <>
    <Header>
      <div className='wap'>
        <button onClick={close}>Добавить</button>
        <button onClick={clearAll} className='blue-button'>Удалить всё</button>
      </div>
      <ul className='list'>
        {list.map(el=><li key={el.id}><Contact click={click}
                                               clear={clear}
                                               id={el.id}
                                               b={el.background}
                                               word={el.word}
                                               name={el.name}
                                               phone={el.Phone}/></li>)}
      </ul>
      {value===true? <Window toChange={toChange}
                             valueChange={valueChange}
                             add={add}
                             nameChange={nameChange}
                             Phone={Phone}
                             name={name}
                             close={close}
                             phoneChange={phoneChange}/>:null}
    </Header>
    </>
  );
}

export default App;
