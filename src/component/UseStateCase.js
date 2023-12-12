import React,{useState} from 'react'

function UseStateCase() {
    const [name,setName]=useState('shivaji')
   
    const data = 'king'
    const dataTwo = 'john'

    const showHandle= (result)=>{
        setName(result)
    }

    const myName = ()=>{showHandle(data)}
    const opName = ()=>{showHandle(dataTwo)}
  return (
    <div>
        <h1>Checking how state working : {name}</h1>
        <button onClick={myName}>click</button>
        <button onClick={opName}>click</button>
    </div>
  )
}

export default UseStateCase