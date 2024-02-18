import { useEffect, useState } from "react"
import DeleteSubject from "../../AdminReusebleComp/DeleteSubject"
import axios from "axios"

export default function DelDha() {
    const [foriegniiData, setforiegniiData] = useState([]);

    useEffect(()=>{
        const fetchData = async (url, setData) =>{
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error(`Error fetching data from ${url}:`, error.message);
            }
        };

        fetchData('http://localhost:3000/showsubject/foriegnii', setforiegniiData);
    }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'DHA'} Items={foriegniiData} URL={"http://localhost:3000/deletesubject/foriegnii"}/>
    </div>
  )
}
