import { Link } from "react-router-dom";
import './FooterStyles.css';
// Importing necessary React and icon components
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
 


export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration : 1300,
      easing: 'ease-in-out-back'
    });
  }, []);
  // JSX structure of the footer
  return (
    <div>
    <div className='footer-main-sec'>
      {/* Left section with brand and social icons */}
      <div>
        <h1 className='footer-main-heading' data-aos="slide-up">PharmaEnclave</h1>
        <p className='footer-main-para' data-aos="slide-up">
        Nurturing future pharmacists, we provide empowering DPharmacy education with insightful lectures and dedicated support, transforming academic challenges into triumphs.        </p>
        <div className='footer-social-icons'>
             <a href="https://m.facebook.com/pharmaenclave" data-aos="slide-up"><FaFacebookSquare size={30} className="icon-faceboook"/></a>
              <a href="https://twitter.com/pharmaenclave" data-aos="slide-up"><FaTwitterSquare  size={30}  className="icon-twitter"/></a>
              <a href="https://www.linkedin.com/company/pharmaenclave/" data-aos="slide-up"><FaLinkedin size={30} className="icon-linkedin"/></a>
              <a href="https://youtube.com/@pharmaenclave1070?feature=shared" data-aos="slide-up"><FaYoutubeSquare size={30} className="icon-Youtube"/></a>
             <a href="https://www.instagram.com/pharmaenclave?igsh=eGowNnIwMDZiODhs" data-aos="slide-up"> <FaInstagramSquare size={30} className="icon-Insta"/></a>
        </div>
      </div>
      {/* Right section with footer content organized in sections */}
      <div className='footer-content-list'>
        {/* Mapping over sections and rendering content */}
            <div>
              <h6 className="content-list-heading" data-aos="slide-up">Courses</h6>
              <ul>
                  <Link to='/profs'><li className='content-list-items' data-aos="slide-up">Profs. Exams</li></Link>
                  <Link to='/fexam'><li className='content-list-items' data-aos="slide-up">Comp. Exams</li></Link>
                  <Link to='/cexam'><li className='content-list-items' data-aos="slide-up">Foriegn Exams</li></Link>
              </ul>
            </div>
            <div>
              <h6 className="content-list-heading" data-aos="slide-up">Useful Links</h6>
              <ul>
                  <Link to="/updates"><li className='content-list-items' data-aos="slide-up">News/Updates</li></Link>
                  <Link to="/about"><li className='content-list-items' data-aos="slide-up">Contact Us</li></Link>
                  <Link to="/admin"><li className='content-list-items' data-aos="slide-up">Admin</li></Link>
              </ul>
            </div>
          </div>
        </div>
          <div className='footer-copyright-sec'>
            <span>© 2024 Copyright:</span> <a className='text-reset fw-bold' href='https://pharmaenclave.com/'>
           PharmaEnclave.com
          </a>
          
        </div>
    </div>
  );
}
