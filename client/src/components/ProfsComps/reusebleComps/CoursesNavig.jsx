import './CoursesNavigationStyles.css';
import { Button } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function CoursesNavig({FirstExam, SecExam}) {
    useEffect(() => {
        AOS.init({
            duration : 1300,
            easing: 'ease-in-out-back'
          });
      }, []);

     let firstExamAddress;
     let secExamAddress;
    if(FirstExam === 'Competitive Exams' && SecExam === 'Foriegn Exams'){
        {/*For Profs */}
        firstExamAddress = 'cexam';
        secExamAddress = 'fexam';
    } else if(FirstExam === 'Professional Exams' && SecExam === 'Foriegn Exams'){
        {/*For Comps */}
        firstExamAddress = '/profs';
        secExamAddress = '/fexam';
    }else if(FirstExam === 'Professional Exams' && SecExam === 'Competitive Exams'){
        {/*For Foriegns */}
        firstExamAddress = 'profs';
        secExamAddress = '/cexam';
    }else{
        console.log('Given Params are Not GOOD.')
    }

  return (
    <div className='navig-main-sec'>
       <div className='navg-first-button'><a href={firstExamAddress}><Button variant="dark" className='navig-button-self' data-aos='slide-right'>{FirstExam}</Button></a></div>
        <div className='navg-sec-button'><a href={secExamAddress}><Button variant="dark" className='navig-button-self' data-aos='slide-left'>{SecExam}</Button></a></div> 
    </div>
  )
}
