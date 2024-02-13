import './DashboardStyles.css';
import '../../../pages/General.css';
import AdminSidebar from '../SidebarComp/AdminSidebar';
import SubjectCardDetail from './AdminReusebleComp/SubjectCardDetail';
import axios from 'axios';
import { useState, useEffect } from "react";


export default function AdminDashboard() {
  const [profiData, setprofiData] = useState([])
  const [profiiData, setprofiiData] = useState([])
  const [profiiiData, setprofiiiData] = useState([])
  const [profivData, setprofivData] = useState([])
  const [profvData, setprofvData] = useState([])

  const [compiData, setcompiData] = useState([]);
  const [compiiData, setcompiiData] = useState([]);
  const [compiiiData, setcompiiiData] = useState([]);

  const [foriegniData, setforiegniData] = useState([]);
  const [foriegniiData, setforiegniiData] = useState([]);
  const [foriegniiiData, setforiegniiiData] = useState([]);


  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
      }
    };

    //fetching profs data
    fetchData('http://localhost:3000/showsubject/profi', setprofiData);
    fetchData('http://localhost:3000/showsubject/profii', setprofiiData);
    fetchData('http://localhost:3000/showsubject/profiii', setprofiiiData);
    fetchData('http://localhost:3000/showsubject/profiv', setprofivData);
    fetchData('http://localhost:3000/showsubject/profiv', setprofvData);

    //fetching comp data
    fetchData('http://localhost:3000/showsubject/compi', setcompiData);
    fetchData('http://localhost:3000/showsubject/compii', setcompiiData);
    fetchData('http://localhost:3000/showsubject/compiii', setcompiiiData);

    //fetching foriegn exam data
    fetchData('http://localhost:3000/showsubject/foriegni', setforiegniData);
    fetchData('http://localhost:3000/showsubject/foriegnii', setforiegniiData);
    fetchData('http://localhost:3000/showsubject/foriegniii', setforiegniiiData);
  }, []);

  const ProfItems = [
    {
       key: 1,
       title: 'Prof. 3',
       length: profiData.length
     },
     {
       key: 2,
       title: 'Prof. 2',
       length: profiiData.length
     },
     {
      key: 3,
      title: 'Prof. 3',
      length: profiiiData.length
     },
     {
      key: 4,
      title: 'Prof. 4',
      length: profivData.length
     },
     {
      key: 5,
      title: 'Prof. 5',
      length: profvData.length
     },
   ]

   const CompItems = [
    {
       key: 1,
       title: 'PPSC',
       length: compiData.length
     },
     {
       key: 2,
       title: 'FPSC',
       length: compiiData.length
     },
     {
      key: 3,
      title: 'NTS',
      length: compiiiData.length
     },
   ]

  const ForiegnItems = [
    {
       key: 1,
       title: 'KAPS',
       length: foriegniData.length
     },
     {
       key: 2,
       title: 'DHA',
       length: foriegniiData.length
     },
     {
      key: 3,
      title: 'FPGEE',
      length: foriegniiiData.length
     },
   ]

  return (
    <div className='home dashboard-main-section'>
      <div><AdminSidebar/></div>
      <div className='dashboard-content-main-sec'>
         <div className='dashboard-subject-number-sec'>
            <h1 className='subject-number-heading'>Number of Subjects</h1>
             <div className='cards-self'> 
              <SubjectCardDetail Items={ProfItems} exam="Prof. Exams" className='subject-card'/>
              <SubjectCardDetail Items={CompItems} exam="Comp. Exams" className='subject-card'/>
              <SubjectCardDetail Items={ForiegnItems} exam="Foriegn Exams" className='subject-card'/>
            </div>
         </div>
         <div>User Anlytics</div>
      </div>
    </div>
  )
}
