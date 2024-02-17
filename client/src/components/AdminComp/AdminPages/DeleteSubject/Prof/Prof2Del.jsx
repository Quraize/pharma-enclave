import { useEffect, useState } from "react";
import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import axios from "axios";

export default function Prof2Del() {
    const [profiiData, setprofiiData] = useState([]);

    useEffect(()=>{
        const fetchData = async (url, setData) => {
            try {
              const response = await axios.get(url);
              setData(response.data);
            } catch (error) {
              console.error(`Error fetching data from ${url}:`, error.message);
            }
          };

          fetchData('http://localhost:3000/showsubject/profiii', setprofiiData);
    }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'Prof 2'} Items={profiiData} URL={"http://localhost:3000/deletesubject/profii"}/>
    </div>
  )
}
