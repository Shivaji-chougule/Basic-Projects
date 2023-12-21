

function Posts({by,id,score,time,title,url}){
    const formatedTime = new Date(time*1000).toLocaleString()
    return (
      <div>
         <h2>
         <a href={url}> {title}</a>
         </h2>
         <span>
         By {by} . {formatedTime}
         </span>
      </div>
    )
  }
  export default Posts