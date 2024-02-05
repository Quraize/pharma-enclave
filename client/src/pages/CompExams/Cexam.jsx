import Sidebar from "../../components/MutualComp/Sidebar/Sidebar";
import Intro from "../../components/ProfsComps/Intro";
import Image1 from '../../assets/5GPCRs General mech1.jpg';
import mobileImage from '../../assets/mobile.jpg';
import TrailComp from "../../components/ProfsComps/TrailingCompProfs/TrailComp";
import { useMediaQuery } from 'react-responsive';
import '../General.css';
import Footer from "../../components/MutualComp/footer/Footer";
import CoursesNavig from "../../components/ProfsComps/reusebleComps/CoursesNavig";
import {useState, useEffect} from 'react';
import axios from "axios";

export default function Cexam() {
   const [compiData, setcompiData] = useState([]);
   const [compiiData, setcompiiData] = useState([]);
   const [compiiiData, setcompiiiData] = useState([]);

   useEffect(()=>{
      const fetchData = async (url, setData) => {
         try {
            const response = await axios.get(url);
            setData(response.data);
         } catch (error) {
            console.log(`Error fetching the data from url: ${url}:`, error.message);
         }
      }

      fetchData('http://localhost:3000/showsubject/compi', setcompiData);
      fetchData('http://localhost:3000/showsubject/compii', setcompiiData);
      fetchData('http://localhost:3000/showsubject/compiii', setcompiiiData);
   }, [])
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
  return (
    <div className='profs'>
      {isTabletOrMobile && <Intro Img={mobileImage} title="Competitive Exams" detail="Prepare Yourself through our courses and land a Government Placement!"/>}
      {isDesktopOrLaptop && <Intro Img={Image1} title="Competitive Exams" detail="Prepare Yourself through our courses and land a Government Placement!"/>}
      <TrailComp profNum={'PPSC'} items={compiData} subjName={'PPSC'} examKind={'Competitive Exams'}  subjNumber={'1st'}/>
      <TrailComp profNum={'FPSC'} items={compiiData} subjName={'FPSC'} examKind={'Competitive Exams'}  subjNumber={'1st'}/>
      <TrailComp profNum={'NTS'} items={compiiiData} subjName={'NTS'} examKind={'Competitive Exams'}  subjNumber={'1st'}/>
      <CoursesNavig FirstExam={'Professional Exams'} SecExam={'Foriegn Exams'}/>
      <Footer/>
      <Sidebar/>
  </div>
  )
}
