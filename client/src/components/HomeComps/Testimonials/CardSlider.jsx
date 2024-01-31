import Carousel from 'react-bootstrap/Carousel';
import TestimonialCards from './TestimonialCards';
import image1 from '../../../assets/person1.jpg';
import image2 from '../../../assets/person2.jpg';
import image3 from '../../../assets/person3.jpg';
import girlImage from '../../../assets/girl_avatar.jpg';
import boylImage from '../../../assets/boy_pic.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import './SliderStyles.css';

const tags = '#ppsc #CompetitiveExam  #pharmaenclave #profsPU';
export default function CardSlider(){
    useEffect(() => {
        AOS.init({
          duration : 1300,
          easing: 'ease-in-out-back'
        });
      }, []);
    return(
        <div className='carousel-sec'>
            <div className='main-heading'>
                <h2 data-aos="slide-right">Testimonial</h2>
            </div>
            <div className='detail'>
                <p data-aos="slide-left">Everything You need to Know to take our courses</p>
            </div>
            <div>
            <Carousel data-bs-theme="dark" className='main-carousel-sec' slide indicators={false} touch={true} data-aos="zoom-in">
                <Carousel.Item>
                    <div className='review'>
                        <TestimonialCards stName={'Abubakar Cheema'} stDesig={'Drug Inspector'} stMessage={` I deeply appreciate the kind and respected Dr. Inaam Ur Rehman and PharmaEnclave for
                               inspiring my PPSC and post-graduation journey.`} stImage={image1} tags={tags}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='review'>
                       <TestimonialCards stName={'Ammara Malhi'} stDesig={'Pharmacy Manager'} stMessage={` I credit my PPSC success to Dr. Inaam, my revered teacher. Grateful for unwavering support
                               in graduation, PPSC Journeyn and MPhil Pharmacology, from enterance test to thesis writting.`} stImage={image2} tags={tags}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='review'>
                <TestimonialCards stName={'Hamza Saleemi'} stDesig={'Hospital Pharmacist'} stMessage={`For for years, I have taken lectures of Sir Inaam via PharmaEnclave. His profound
                                knowledge of Pharmacology and exceptional teaching style led to my two distinctions-a true blessing.`} stImage={image3} tags={tags}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                 <div className='review'>
                    <TestimonialCards stName={'Mehreen Naz'} stDesig={'Drug Inspector'} stMessage={`During PPSC prep, I gained conceptual clarity from PharmaEnclaves sessions. Because of that I aced the PPSC interviews and in MPhil entry test, thanks to Dr. Inaams valuable guidance.`} stImage={girlImage} tags={tags}/>
                 </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='review'>
                  <TestimonialCards stName={'Hassan Mirza'} stDesig={'KAPS Aspirant'} stMessage={`Completing PharmaEnclaves KAPS session was crucial for my success. The well-structured content, 
                                engaging instructor, and valuable resources make it highly recommended for exam preparation.`} stImage={boylImage} tags={tags}/>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}