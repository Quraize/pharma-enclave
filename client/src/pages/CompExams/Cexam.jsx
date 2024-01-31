import Sidebar from "../../components/MutualComp/Sidebar/Sidebar";
import Intro from "../../components/ProfsComps/Intro";
import Image1 from '../../assets/5GPCRs General mech1.jpg';
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

export default function Cexam() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
  return (
    <div className='profs'>
      {isTabletOrMobile && <Intro Img={mobileImage} title="Competitive Exams" detail="Prepare Yourself through our courses and land a Government Placement!"/>}
      {isDesktopOrLaptop && <Intro Img={Image1} title="Competitive Exams" detail="Prepare Yourself through our courses and land a Government Placement!"/>}
      <TrailComp profNum={'PPSC-I'} items={items} subjName={'PPSC'} examKind={'Competitive Exams'}  subjNumber={'1st'}/>
      <TrailComp profNum={'PPSC-II'} items={items} subjName={'FPSC'} examKind={'Competitive Exams'}  subjNumber={'1st'}/>
      <TrailComp profNum={'PPSC-III'} items={items} subjName={'KAPS'} examKind={'Competitive Exams'}  subjNumber={'1st'}/>
      <CoursesNavig FirstExam={'Professional Exams'} SecExam={'Foriegn Exams'}/>
      <Footer/>
      <Sidebar/>
  </div>
  )
}
