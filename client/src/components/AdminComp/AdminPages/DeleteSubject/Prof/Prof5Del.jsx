import { useEffect, useState } from "react";
import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import axios from "axios";

export default function Prof5Del() {
    const [profvData, setprofvData] = useState([]);

    useEffect(()=>{
        const fetchData = async (url, setData) => {
            try {
              const response = await axios.get(url);
              setData(response.data);
            } catch (error) {
              console.error(`Error fetching data from ${url}:`, error.message);
            }
          };

          fetchData('http://localhost:3000/showsubject/profv', setprofvData);
    }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'Prof 5'} Items={profvData} URL={"http://localhost:3000/deletesubject/profv"}/>
    </div>
  )
}
