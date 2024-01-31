import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Button, Offcanvas, Container } from 'react-bootstrap'; 
import {useState} from 'react';
import { FaXmark,  FaHouse,  FaCircleInfo , FaNewspaper, FaBook, FaAlignJustify, FaAngleRight,  FaGraduationCap, FaMedal, FaPlaneDeparture } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';
import { Dropdown } from 'flowbite-react';
import './SidebarStyles.css';
import Logo from '../../../assets/logo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Sidebar() {
    const [show, setShow] = useState(false);  
    const closeSidebar = () => setShow(false);  
    const showSidebar = () => setShow(true);  

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });

      useEffect(() => {
        AOS.init({
          duration : 1300,
          easing: 'ease-in-out-back'
        });
      }, []);

  return (
    <div>
        {isTabletOrMobile &&    <div className='sidebar-button-sec' >
      <Button variant="dark" className='sidebar-button' onClick={showSidebar} data-aos="slide-right" >  
        <FaAlignJustify size={15}/>
      </Button>
      </div>}
      {isDesktopOrLaptop &&    <div className='sidebar-button-sec'>
      <Button variant="dark" className='sidebar-button' onClick={showSidebar} data-aos="slide-right">  
        <FaAlignJustify size={20}/>
      </Button>
      </div>}
    <Container className='canvas-container'>
      <Offcanvas show={show} onHide={closeSidebar} scroll={true} backdrop={true} keyboard={true} className="sidebar-convas">  
        <Offcanvas.Header closeButton>  
          <Offcanvas.Title>
            {isTabletOrMobile && <div className='closing-icon-sec' data-aos="slide-right" data-aos-duration="1200"><FaXmark size={17} onClick={closeSidebar} className='canvas-closing-icon'/></div>}
            {isDesktopOrLaptop && <div className='closing-icon-sec' data-aos="slide-right"><FaXmark  size={20} onClick={closeSidebar} className='canvas-closing-icon'/></div>}    
            <div className='logo-sec' data-aos="slide-down"><Link to='/'> <img src={Logo} alt="PharmaEnclave" className="sidebar-Logo"/></Link></div>
          </Offcanvas.Title>  
        </Offcanvas.Header>  
        <Offcanvas.Body>  
          <ul className='canvas-list'>
            <Link to='/'><li className='item-itself' data-aos="slide-right"><FaHouse size={25} className='item-icon'/>Home</li></Link>
            {isDesktopOrLaptop &&    <Dropdown className='sidebar-dropdown' label="" placement="right-start" dismissOnClick={false} renderTrigger={() => <div className='item-itself' data-aos="slide-right"><FaBook size={23} className='item-icon'/>Courses<div  className='dropdown-icon' data-aos="slide-right" data-aos-duration="1200"><FaAngleRight size={20}/></div></div>}>
                   <Link to='/profs'> <Dropdown.Item className='item-itself' data-aos="zoom-out"><FaGraduationCap size={27} className='item-icon'/>Professional Exams</Dropdown.Item></Link>
                    <Link to='/cexam'><Dropdown.Item className='item-itself' data-aos="zoom-out"><FaMedal size={27} className='item-icon'/>Competetive Exams</Dropdown.Item></Link>
                    <Link to='/fexam'><Dropdown.Item className='item-itself' data-aos="zoom-out"><FaPlaneDeparture size={27} className='item-icon'/>Foriegn Exams</Dropdown.Item></Link>
                </Dropdown>}
            {isTabletOrMobile &&    <Dropdown className='sidebar-dropdown' label="" size="sm" placement="bottom" dismissOnClick={false} renderTrigger={() => <div className='item-self-mobile-view' data-aos="slide-right"><FaBook size={17} className='item-icon-mobile-view'/><p className='item-self-mobile-view-name'>Courses</p><div className='dropdown-icon-mobile-view' data-aos="slide-right" data-aos-duration="1200"><FaAngleRight size={20}/></div></div>}>
                   <Link to='/profs'> <Dropdown.Item className='item-itself' data-aos="zoom-out"><FaGraduationCap size={25} className='item-icon'/>Professional Exams</Dropdown.Item></Link>
                    <Link to='/cexam'><Dropdown.Item className='item-itself' data-aos="zoom-out"><FaMedal size={25} className='item-icon'/>Competitive Exams</Dropdown.Item></Link>
                    <Link to='/fexam'><Dropdown.Item className='item-itself' data-aos="zoom-out"><FaPlaneDeparture size={25} className='item-icon'/>Foriegn Exams</Dropdown.Item></Link>
                </Dropdown>}
            <Link to='/about'><li className='item-itself' data-aos="slide-right"><FaCircleInfo size={25} className='item-icon'/>About Us</li></Link>
            <Link to='updates'><li className='item-itself' data-aos="slide-right"><FaNewspaper size={25} className='item-icon'/>Updates</li></Link>
          </ul>
        </Offcanvas.Body>  
      </Offcanvas>  
      </Container>
    </div>
  )
}
