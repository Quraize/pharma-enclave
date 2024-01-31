import { Card ,  Button } from "react-bootstrap";
import Image1 from '../../../assets/2 SCENE.png';
import Image2 from '../../../assets/3 SCENE.png';
import Image3 from '../../../assets/6 SCENE.png';
import './CoursesCardCompStyles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

// eslint-disable-next-line react/prop-types
export default function CoursesCardComp({ExamTitle, ExamDetail}) {
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

  let examAddress;
  let cardImage;
  if(ExamTitle === 'Professional Exams'){
    examAddress = '/profs';
    cardImage = Image1
  }else if(ExamTitle === 'Competitive Exams'){
      examAddress = '/cexam'
      cardImage = Image2
  }else if(ExamTitle === 'Foriegn Exams' ){
    examAddress = '/fexam'
    cardImage = Image3
  }else{
    console.log("Given Parameter is not good");
  }
  return (
    <div className="cardcomp-main-sec" data-aos='flip-left'>
    {isDesktopOrLaptop && <Card style={{width:'18rem', height: '24rem'}} className="courses-card">
      <Card.Header>
             <div className='coursescard-img'><Card.Img src={cardImage} alt={ExamTitle}/></div>
      </Card.Header>
   <Card.Body>
     <Card.Title style={{textAlign: 'center', fontSize: '18px', fontWeight:'bolder'}}>{ExamTitle}</Card.Title>
     <Card.Text style={{textAlign:'center', fontSize: '15px', paddingBottom: '8px'}}>
        {ExamDetail}
     </Card.Text>
      <div style={{justifyContent: 'center', justifyItems: 'center', display: 'flex'}}>
      <a href={examAddress}><Button variant="dark" className='card-self-button'>Subjects</Button></a>
      </div>
   </Card.Body>
 </Card>}

    {isTabletOrMobile && <Card style={{width:'15rem', height: '22rem'}} className="courses-card">
      <Card.Header>
             <div className='coursescard-img'><Card.Img src={cardImage} alt={ExamTitle}/></div>
      </Card.Header>
   <Card.Body>
     <Card.Title style={{textAlign: 'center', fontSize: '18px', fontWeight:'bolder'}}>{ExamTitle}</Card.Title>
     <Card.Text style={{textAlign:'center', fontSize: '15px', paddingBottom: '8px'}}>
        {ExamDetail}
     </Card.Text>
      <div style={{justifyContent: 'center', justifyItems: 'center', display: 'flex'}}>
      <a href={examAddress}><Button variant="dark" className='card-self-button'>Subjects</Button></a>
      </div>
   </Card.Body>
 </Card>}
    </div>
  )
}
