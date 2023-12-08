import ChildOne from "./component/childOne";
import FetchDataIntoTable from "./component/FetchDataIntoTable";
import React,{useState,useEffect} from "react";
function App() {

  const[data,setData] = useState([])
  

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res)=>res.json())
      .then((data)=>setData(data))
  },[])
  console.log(data)
  const itemsPerPage = 5;

  return (
    <div className="App">
      <h1>hello</h1>
      {/* <ChildOne/> */}
    <FetchDataIntoTable data={data} itemsPerPage={itemsPerPage}/>
    </div>
  );
}

export default App;
