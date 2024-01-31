import Navbar from '../components/MutualComp/Navbar';
import Slider from '../components/HomeComps/Slider/Slider';
import CourseComp from '../components/HomeComps/CoursesCards/CourseComp';
import CardSlider from '../components/HomeComps/Testimonials/CardSlider';
import MentorCard from '../components/HomeComps/Mentors/MentorCard';
import Footer from '../components/MutualComp/footer/Footer';
import './General.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration : 1700,
      easing: 'ease-in-out-back'
    });
  }, []);
  return (
    <div className='home'>
      <Slider/>
      <CourseComp/>
      <MentorCard/>
      <CardSlider/>
      <Footer/>
      <Navbar/>
    </div>
    
  )
}
