import Sidebar from "../../components/MutualComp/Sidebar/Sidebar";
import Intro from "../../components/ProfsComps/Intro";
import Image1 from '../../assets/6G inhibitory.jpg';
import mobileImage from '../../assets/mobile.jpg';
import TrailComp from "../../components/ProfsComps/TrailingCompProfs/TrailComp";
import { useMediaQuery } from 'react-responsive';
import '../General.css';
import Footer from "../../components/MutualComp/footer/Footer";
import CoursesNavig from "../../components/ProfsComps/reusebleComps/CoursesNavig";
import axios from 'axios';
import { useState, useEffect } from "react";



export default function Fexam() {
   const [foriegniData, setforiegniData] = useState([]);
   const [foriegniiData, setforiegniiData] = useState([]);
   const [foriegniiiData, setforiegniiiData] = useState([]);

   useEffect(()=>{
      const fetchData = async (url, setData) => {
         try {
            const response = await axios.get(url);
            setData(response.data);

         } catch (error) {
            console.log(`Error fetching data from ${url}:`, error.message);
            
         }
      };

      fetchData('http://localhost:3000/showsubject/foriegni', setforiegniData);
      fetchData('http://localhost:3000/showsubject/foriegnii', setforiegniiData);
      fetchData('http://localhost:3000/showsubject/foriegniii', setforiegniiiData);
   }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
  return (
    <div className='profs'>
      {isTabletOrMobile && <Intro Img={mobileImage} title="Foriegn Exams" detail="Charting Success Abroad: Your path to Excellence Starts Now!"/>}
      {isDesktopOrLaptop && <Intro Img={Image1} title="Foriegn Exams" detail="Charting Success Abroad: Your path to Excellence Starts Now!"/>}
      <TrailComp profNum={'KAPS'} items={foriegniData} subjName={'KAPS'} examKind={'Foriegn Exams'} subjNumber={'1st'}/>
      <TrailComp profNum={'DHA'} items={foriegniiData} subjName={'KAPS'} examKind={'Foriegn Exams'} subjNumber={'2nd'}/>
      <TrailComp profNum={'FPGEE'} items={foriegniiiData} subjName={'KAPS'} examKind={'Foriegn Exams'} subjNumber={'3rd'}/>
      <CoursesNavig FirstExam={'Professional Exams'} SecExam={'Competitive Exams'}/>
      <Footer/>
      <Sidebar/>
  </div>
  )
}
