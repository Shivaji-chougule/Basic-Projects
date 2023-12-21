import React,{useState,useEffect} from 'react'
import Posts from './Posts';
import './Posts.css'
const API_ENDPOINT = 'https://hacker-news.firebaseio.com/v0'
const ITEMS_PER_PAGES = 6; 


export default function App() {
    const [posts,setPosts] = useState([])
    const [postId,setPostId] = useState(null)
    const [currentPage,setCurrentPage] = useState(0)

    const fetchData = async (currPage)=>{
        setCurrentPage(currPage)

    let itemsList = postId;
    if(itemsList === null){
    const response = await fetch(`${API_ENDPOINT}/jobstories.json`)
     const newItemsList = await response.json() 
     setPostId(newItemsList)
     itemsList = newItemsList
    }
    console.log(itemsList)
        
    const startId = (currPage )*ITEMS_PER_PAGES
    const endId = startId + ITEMS_PER_PAGES
    const itemIdsForPage = itemsList.slice(startId,endId)

    const itemsForPages = await Promise.all(
      itemIdsForPage?.map(itemId =>
      fetch(`${API_ENDPOINT}/item/${itemId}.json`).then(res => res.json())
      ) 
    )
    console.log(itemsForPages)
    setPosts([...posts,...itemsForPages]) 
   
    }

    useEffect(()=>{
     if(currentPage === 0) fetchData(currentPage)
    },[currentPage])

return <div>
         <h1>Hacker News Jobs Board</h1>
         {
         (postId === null || posts.length )< 1 ?(
            <p>loding...</p>
          ):(
            <div>
                 <div className="items" role="role">
            {
            posts?.map((item)=>{
            return  <Posts key={item.id} {...item}/>
             })
            }
                 </div>
            <button className='loadbtn' onClick={()=>fetchData(currentPage + 1)}>load more jobs</button>
            </div>
            
          )
         }
            
      </div>;
}
