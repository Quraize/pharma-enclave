import CarouselComp from "./CarouselComp"
import { FaPenAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { HashLink } from 'react-router-hash-link';
import './SubjectIntroStyles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';



export default function SubjectIntro({items, SubjName, ExamKind ,SubjNumber}) {
  useEffect(() => {
    AOS.init({
        duration : 1300,
        easing: 'ease-in-out-back'
      });
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });

  return (
    <div className="subject-main-sec">
        <div className="subject-heading-sec" data-aos="slide-right">
          {isTabletOrMobile && <div className="heading-div"> <FaPenAlt size={23} className="subject-icon-self"/><h4 className="subject-top-heading-self">{ExamKind} | {SubjNumber} </h4></div>}
          {isDesktopOrLaptop && <div className="heading-div"> <FaPenAlt size={26} className="subject-icon-self"/><h4 className="subject-top-heading-self">{ExamKind} | {SubjNumber} </h4></div>}
          <h1 className="subject-heading-self" >Subjects</h1>
          <p className="subject-para-self" >Introductory lectures by Dr Inaam-Ur-Rehman on the subjects of the {SubjName} of DPharmacy.</p>
          <div className='subject-heading-sec-button'><HashLink to={'/about#contact'}><Button variant="dark" className='subject-button-self'>Get in Touch</Button></HashLink></div>
        </div>
        <div className="subject-carousel-sec" data-aos="slide-left"><CarouselComp Items={items} className="subj-carousel-self"/></div>
    </div>
  )
}
