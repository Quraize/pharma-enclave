import './mentorStyles.css';
import Card from 'react-bootstrap/Card';
import { useMediaQuery } from 'react-responsive';

export default function MentorCards({mentorName, mentorImage, mentorDesig, mentorUni}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });

  return (
    <div> <Card style={{ width: '18rem', justifyContent: 'center', justifyItems: 'center', display: 'flex'}}>
    {isDesktopOrLaptop && <div style={ {paddingTop: '10px ',justifyContent: 'center', justifyItems: 'center', display: 'flex'} }><Card.Img variant="top" src={mentorImage} style={{borderRadius: '999px', height: '130px', width: '130px'}}/></div>}
    {isTabletOrMobile && <div style={ {paddingTop: '10px ',justifyContent: 'center', justifyItems: 'center', display: 'flex'} }><Card.Img variant="top" src={mentorImage} style={{borderRadius: '999px', height: '50px', width: '50px'}}/></div>}
        <Card.Body>
         <Card.Title className='mentor-card-title'>{mentorName}</Card.Title>
         <Card.Subtitle className='mentor-sub-heading'>{mentorDesig}</Card.Subtitle>
         <Card.Subtitle className='mentor-sub-heading'>{mentorUni}</Card.Subtitle>
        </Card.Body>
    </Card>
</div>
  )
}
