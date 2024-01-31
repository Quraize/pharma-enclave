import './mentorStyles.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import MentorCards from './MentorCards';
import image1 from '../../../assets/inam1.jpg';
import image2 from '../../../assets/zikriya1.jpg';
import { HashLink } from 'react-router-hash-link';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function MentorCard() {
    useEffect(() => {
        AOS.init({
          duration : 1300,
          easing: 'ease-in-out'
        });
      }, []);
  return (
    <div className='mentor-main-sec'>
        <div className='mentor-heading-sec'>
            <h4 className='mentor-top-heading' data-aos="slide-right">Our Team | The Teachers</h4>
            <h1 className='mentor-heading' data-aos="slide-right">Meet Our Mentors</h1>
            <p className='mentor-para' data-aos="slide-right">Empowering mind, shaping futures - where Teachers
            inspire, mentors guide, and the institute cultivate excellence.</p>
            <div className='mentor-heading-sec-button'><HashLink to={'/about#contact'}><Button variant="dark" className='mentor-button-self'  data-aos="slide-right">Get in Touch</Button></HashLink></div>
        </div>
        <div className='mentor-card-sec'>
          <div className='mentor-carousel-detail'>
            <Carousel data-bs-theme="dark" className='mentor-main-carousel-sec' slide indicators={true} touch={true}  data-aos="slide-left">
                <Carousel.Item>    
                    <div className='mentor-review mentor-card-one'>
                        <MentorCards mentorName={'Dr. Inaam Ur Rehman'} mentorImage={image1} mentorDesig={'PhD Scholar - Pharmacology'} mentorUni={'University of the Punjab'}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='mentor-review card-two'>
                        <MentorCards mentorName={'Dr. Zikriya Saleem'} mentorImage={image2} mentorDesig={'PhD Scholar - Clinical Pharmacy'} mentorUni={'USM, Malaysia'}/>
                    </div>  
                </Carousel.Item>
            </Carousel> 
         </div>       
      </div>
    </div>
  )
}
