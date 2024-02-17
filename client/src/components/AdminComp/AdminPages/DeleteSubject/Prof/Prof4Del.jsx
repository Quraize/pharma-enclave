import { useEffect, useState } from "react";
import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import axios from "axios";

export default function Prof4Del() {
    const [profivData, setprofivData] = useState([]);

    useEffect(()=>{
        const fetchData = async (url, setData) => {
            try {
              const response = await axios.get(url);
              setData(response.data);
            } catch (error) {
              console.error(`Error fetching data from ${url}:`, error.message);
            }
          };

          fetchData('http://localhost:3000/showsubject/profiv', setprofivData);
    }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'Prof 4'} Items={profivData} URL={"http://localhost:3000/deletesubject/profiv"}/>
    </div>
  )
}
