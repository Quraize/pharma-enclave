import './SubjectCardDetail.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from 'react-responsive';


export default function SubjectCardDetail({Items, exam}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const items = [...Items];
  return (

    <div className='subject-card-main-comp'>
        {isDesktopOrLaptop &&   <Card style={{width: '15rem', height: '9rem'}} className='subject-card'>
          <Card.Header>
                <Card.Title>{exam}</Card.Title>
          </Card.Header>
          <Card.Body>
             <Carousel data-bs-theme='dark' className='subject-containing-carousel' indicators={false} slide touch={true}>
               {items.map((item) =>(
                    <Carousel.Item key={item.key}>            
                         <Card.Title>{item.title}</Card.Title>
                         <Card.Text className='subject-number-self'>{item.length}</Card.Text>
                     </Carousel.Item>
               ))} 
            </Carousel>
         </Card.Body>    
        </Card>}
        {isTabletOrMobile && <Card style={{width: '10rem', height: '7rem'}} className='subject-card'>
          <Card.Header>
                <Card.Title>{exam}</Card.Title>
          </Card.Header>
          <Card.Body>
             <Carousel data-bs-theme='dark' className='subject-containing-carousel' indicators={false} slide touch={true}>
               {items.map((item) =>(
                    <Carousel.Item key={item.key}>            
                         <Card.Title>{item.title}</Card.Title>
                         <Card.Text className='subject-number-self'>{item.length}</Card.Text>
                     </Carousel.Item>
               ))} 
            </Carousel>
         </Card.Body>    
        </Card>}
        
    </div>
  )
}
