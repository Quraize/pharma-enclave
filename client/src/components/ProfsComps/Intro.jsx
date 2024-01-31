import './IntroStyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Intro({Img , title, detail}) {
    useEffect(() => {
        AOS.init({
          duration : 1300,
          easing: 'ease-in-out-back'
        });
    }, []);

  return (
    <div>
    <div className = "head-text">
        <div >
            <img src = {Img} alt = "ProffessionalExams" data-aos="zoom-out" className="intro-image" />
            
        </div>
          <div className='text-on-image'>
            <h1 className='caption-heading' data-aos="fade-up">{title}</h1>
             <p className='caption-para' data-aos="fade-up" data-aos-duration="1400">{detail}</p>
          </div>
      </div>
               
    </div>
  )
}
