import React,{useState} from "react"

function FetchDataIntoTable ({data,itemsPerPage}){
   
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.floor(data.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);
  
    // const handlePageChange = (page) => {
    //   setCurrentPage(page);
    // };

    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
    
    return (
        <div>
        <table border={10} width={600} length={400}>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page,info) => (
              <button
                key={info}
                onClick={() => handlePageChange(page)}
                style={{
                  cursor: 'pointer',
                  padding: '8px 16px',
                  margin: '0 4px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  background: currentPage === page ? '#ddd' : 'transparent',
                }}
              >
                {page}
              </button>
            )
          )}
        </div> */}
        <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      </div>
    )
}
export default FetchDataIntoTable