import Sidebar from "../../components/MutualComp/Sidebar/Sidebar";
import Intro from "../../components/ProfsComps/Intro";
import Image1 from '../../assets/6G inhibitory.jpg';
import mobileImage from '../../assets/mobile.jpg';
import TrailComp from "../../components/ProfsComps/TrailingCompProfs/TrailComp";
import { useMediaQuery } from 'react-responsive';
import '../General.css';
import Footer from "../../components/MutualComp/footer/Footer";
import CoursesNavig from "../../components/ProfsComps/reusebleComps/CoursesNavig";

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

export default function Fexam() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
  return (
    <div className='profs'>
      {isTabletOrMobile && <Intro Img={mobileImage} title="Foriegn Exams" detail="Charting Success Abroad: Your path to Excellence Starts Now!"/>}
      {isDesktopOrLaptop && <Intro Img={Image1} title="Foriegn Exams" detail="Charting Success Abroad: Your path to Excellence Starts Now!"/>}
      <TrailComp profNum={'KAPS-I'} items={items} subjName={'KAPS'} examKind={'Foriegn Exams'} subjNumber={'1st'}/>
      <TrailComp profNum={'KAPS-II'} items={items} subjName={'KAPS'} examKind={'Foriegn Exams'} subjNumber={'2nd'}/>
      <TrailComp profNum={'KAPS-III'} items={items} subjName={'KAPS'} examKind={'Foriegn Exams'} subjNumber={'3rd'}/>
      <CoursesNavig FirstExam={'Professional Exams'} SecExam={'Competitive Exams'}/>
      <Footer/>
      <Sidebar/>
  </div>
  )
}
