import { useEffect, useState } from "react";
import DeleteSubject from "../../AdminReusebleComp/DeleteSubject";
import axios from "axios";

export default function DelKaps() {
    const [foriegniData, setforiegniData] = useState([]);

    useEffect(()=>{
        const fetchData = async (url, setData) =>{
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error(`Error fetching data from ${url}:`, error.message);
            }
        };

        fetchData('http://localhost:3000/showsubject/foriegni', setforiegniData);
    }, [])
  return (
    <div>
        <DeleteSubject SubTitle={'KAPS'} Items={foriegniData} URL={"http://localhost:3000/deletesubject/foriegni"}/>
    </div>
  )
}
