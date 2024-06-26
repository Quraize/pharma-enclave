import { useEffect, useState } from "react";
import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import axios from "axios";



export default function Prof1Del() {
    const [profiData, setprofiData] = useState([]);

    useEffect(()=>{
        const fetchData = async (url, setData) => {
            try {
              const response = await axios.get(url);
              setData(response.data);
            } catch (error) {
              console.error(`Error fetching data from ${url}:`, error.message);
            }
          };

          fetchData('http://localhost:3000/showsubject/profi', setprofiData);
    }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'Prof 1'} Items={profiData} URL={"http://localhost:3000/deletesubject/profi"}/>
    </div>
  )
}
