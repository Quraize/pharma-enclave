import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import { useEffect, useState } from "react"
import axios from "axios"

export default function DelPpsc() {
  const [compiData, setcompiData] = useState([]);

  useEffect(()=>{
      const fetchData = async (url, setData) =>{
          try {
              const response = await axios.get(url);
              setData(response.data);
          } catch (error) {
              console.error(`Error fetching data from ${url}:`, error.message);
          }
      };

      fetchData('http://localhost:3000/showsubject/compi', setcompiData);
  }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'PPSC'} Items={compiData} URL={"http://localhost:3000/deletesubject/compi"}/>
    </div>
  )
}