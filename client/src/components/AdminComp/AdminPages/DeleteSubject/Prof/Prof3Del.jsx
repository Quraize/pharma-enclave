import { useEffect, useState } from "react";
import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import axios from "axios";

export default function Prof3Del() {
    const [profiiiData, setprofiiiData] = useState([]);

    useEffect(()=>{
        const fetchData = async (url, setData) => {
            try {
              const response = await axios.get(url);
              setData(response.data);
            } catch (error) {
              console.error(`Error fetching data from ${url}:`, error.message);
            }
          };

          fetchData('http://localhost:3000/showsubject/profiii', setprofiiiData);
    }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'Prof 3'} Items={profiiiData} URL={"http://localhost:3000/deletesubject/profiii"}/>
    </div>
  )
}
