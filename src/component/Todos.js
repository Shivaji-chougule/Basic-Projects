import './styles.css';
import {useState} from 'react'
export default function Todos() {
  const [data,setData]=useState("")
const[todos,setTodos]=useState([])

  function handleSubmit(e){
    e.preventDefault()
    console.log(data)
 if(data !== ""){
    setTodos([...todos,{id:Math.floor(Math.random() *100)
      ,data}])}
setData("")
  }

function handleDelete(id){
  const remainTodos = todos.filter((item)=> item.id !== id);
  setTodos([...remainTodos])
}

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} placeholder="Add your task" />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
      {
        todos.map((item)=>(
          <li key={item.id}>
          <span>{item.data}</span>
          <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
        </li>
        ))
      }
      </ul>
    </div>
  );
}
