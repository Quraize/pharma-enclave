import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import { useEffect, useState } from "react"
import axios from "axios"

export default function DelFpsc() {
  const [compiiData, setcompiiData] = useState([]);

  useEffect(()=>{
      const fetchData = async (url, setData) =>{
          try {
              const response = await axios.get(url);
              setData(response.data);
          } catch (error) {
              console.error(`Error fetching data from ${url}:`, error.message);
          }
      };

      fetchData('http://localhost:3000/showsubject/compii', setcompiiData);
  }, [])
return (
  <div>
      <DeleteSubject SubTitle={'FPSC'} Items={compiiData} URL={"http://localhost:3000/deletesubject/compii"}/>
  </div>
)
}
