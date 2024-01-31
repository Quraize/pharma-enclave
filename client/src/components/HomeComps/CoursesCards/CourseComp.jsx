import CoursesCardComp from "./CoursesCardComp"
import './CardStyle.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function CourseComp() {
  useEffect(() => {
    AOS.init({
        duration : 1300,
        easing: 'ease-in-out-back'
      });
  }, []);

  return (
    <div className="courses-main-sec">
      <div className="courses-heading-sec">
        <h1 className="courses-heading-self" data-aos='slide-right'>Courses</h1>
        <p className="courses-para" data-aos='slide-left'>Following programs are offered</p>
      </div>
      <div className="courses-cards-sec">
        <div className="cards-self-sec">
          <div  className='courses-cards-self'><CoursesCardComp ExamTitle={'Professional Exams'} ExamDetail={'Preparations for the Exams conducted by the Universaties, for DPharmacy.'}/></div>
          <div  className='courses-cards-self'><CoursesCardComp ExamTitle={'Competitive Exams'} ExamDetail={'Preparations for the Exams conducted by the PPSC/FPSC for the GOVT Jobs.'}/></div>
          <div  className='courses-cards-self'><CoursesCardComp ExamTitle={'Foriegn Exams'} ExamDetail={'Preparations for the Exams conducted by International Authorities.'}/></div>
        </div>
      </div>
    </div>
  )
}
