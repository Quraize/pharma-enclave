import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import { useEffect, useState } from "react"
import axios from "axios"

export default function DelNts() {
  const [compiiiData, setcompiiiData] = useState([]);

  useEffect(()=>{
      const fetchData = async (url, setData) =>{
          try {
              const response = await axios.get(url);
              setData(response.data);
          } catch (error) {
              console.error(`Error fetching data from ${url}:`, error.message);
          }
      };

      fetchData('http://localhost:3000/showsubject/compiii', setcompiiiData);
  }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'NTS'} Items={compiiiData} URL={"http://localhost:3000/deletesubject/compiii"}/>
    </div>
  )
}
