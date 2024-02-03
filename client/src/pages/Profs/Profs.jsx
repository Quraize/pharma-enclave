import Sidebar from "../../components/MutualComp/Sidebar/Sidebar";
import Intro from "../../components/ProfsComps/Intro";
import TrailComp from "../../components/ProfsComps/TrailingCompProfs/TrailComp";
import Image1 from '../../assets/3Gs in smooth muscle.jpg';
import mobileImage from '../../assets/mobile.jpg';
import { useMediaQuery } from 'react-responsive';
import '../General.css';
import Footer from "../../components/MutualComp/footer/Footer";
import CoursesNavig from "../../components/ProfsComps/reusebleComps/CoursesNavig";
import axios from 'axios';
import { useState, useEffect } from "react";

const items = [
  {
     index:1,
     Id:'Nq25k-9mVvY',
     Subject: 'Physiology',
     Detail: `An introductory lecture by Sir Inaam on 1st Prof's Physiology, touching the minor details that teases the mind of the students.`,
  },
  {
     index:2,
     Id:'Nq25k-9mVvY',
     Subject: 'Physiology',
     Detail: `An introductory lecture by Sir Inaam on 1st Prof's Physiology, touching the minor details that teases the mind of the students.`,
  },
  {
     index:3,
     Id:'Nq25k-9mVvY',
     Subject: 'Physiology',
     Detail: `An introductory lecture by Sir Inaam on 1st Prof's Physiology, touching the minor details that teases the mind of the students.`,
  },
  {
     index:4,
     Id:'Nq25k-9mVvY',
     Subject: 'Physiology',
     Detail: `An introductory lecture by Sir Inaam on 1st Prof's Physiology, touching the minor details that teases the mind of the students.`,
  },
  {
     index:5,
     Id:'Nq25k-9mVvY',
     Subject: 'Physiology',
     Detail: `An introductory lecture by Sir Inaam on 1st Prof's Physiology, touching the minor details that teases the mind of the students.`,
  }
]

export default function Profs() {
  const [profiData, setprofiData] = useState([])
  const [profiiData, setprofiiData] = useState([])
  const [profiiiData, setprofiiiData] = useState([])
  const [profivData, setprofivData] = useState([])
  const [profvData, setprofvData] = useState([])


  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData('http://localhost:3000/showsubject/profi', setprofiData);
    fetchData('http://localhost:3000/showsubject/profii', setprofiiData);
    fetchData('http://localhost:3000/showsubject/profiii', setprofiiiData);
    fetchData('http://localhost:3000/showsubject/profiv', setprofivData);
    fetchData('http://localhost:3000/showsubject/profiv', setprofvData);
  }, []);


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
  return (
    <div className='profs'>
      {isTabletOrMobile && <Intro Img={mobileImage} title="Proffessional Exams" detail="Get our courses, and Ace through your Academic Struggle"/>}
      {isDesktopOrLaptop && <Intro Img={Image1} title="Proffessional Exams" detail="Get our courses, and Ace through your Academic Struggle"/> }
      <TrailComp profNum={'1st Prof.'} items={profiData} subjName={'First Prof'} examKind={'Professional Exams'} subjNumber={'1st'}/>
      <TrailComp profNum={'2nd Prof.'} items={profiiData} subjName={'Second Prof'} examKind={'Professional Exams'}  subjNumber={'2nd'}/>
      <TrailComp profNum={'3rd Prof.'} items={profiiiData} subjName={'Third Prof'} examKind={'Professional Exams'}  subjNumber={'3rd'}/>
      <TrailComp profNum={'4th Prof.'} items={profivData} subjName={'Fourth Prof'} examKind={'Professional Exams'}  subjNumber={'4th'}/>
      <TrailComp profNum={'5th Prof.'} items={profvData} subjName={'Fifth Prof'} examKind={'Professional Exams'}  subjNumber={'5th'}/>
      <CoursesNavig FirstExam={'Competitive Exams'} SecExam={'Foriegn Exams'}/>
      <Footer/>
      <Sidebar/>
    </div>
  )
}
