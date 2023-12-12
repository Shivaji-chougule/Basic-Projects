import React,{useState} from 'react'

function Counter (){

const[state,setState]=useState({counterOne:0,counterTwo:0})

const addFirstHandler = ()=>{
    // setState((prev)=>{
    //     ...prev,
    //     counterOne: prev.counterOne +1})
}
const addSecondHandler = ()=>{
    setState()
}
    return (
        <div>
            <h1>Counter1: {state}</h1>
            <button onClick={addFirstHandler}>Increase by 1</button>
            <h1>Counter2: {state}</h1>
            <button onClick={addSecondHandler}>Increase by 2</button>
        </div>
    )
}
export default Counter