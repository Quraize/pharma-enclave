import './TrailStyles.css';
import SubjectIntro from '../reusebleComps/SubjectIntro';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function TrailComp({profNum, items, subjName, examKind,subjNumber}) {
  useEffect(() => {
    AOS.init({
        duration : 1300,
        easing: 'ease-in-out-back'
      });
  }, []);
  return (
    <div className='trail-comp-main-sec'>
      <div className='prof-number-sec'>
       <div className='prof-number-self'>{profNum}</div>
      </div>
      <div className='subjectintro-sec'><SubjectIntro items={items} SubjName={subjName} ExamKind={examKind} SubjNumber={subjNumber}/></div>
    </div>
  )
}
