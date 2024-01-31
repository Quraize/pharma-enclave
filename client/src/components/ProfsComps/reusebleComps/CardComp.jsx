import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import VideoComponent from './VideoComponent';
import { useMediaQuery } from 'react-responsive';
import './CardCompStyles.css';

export default function CardComp({Id, subject, detail}) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
  return (
    <div className='main-cardcomp-sec'>
      {/*Card for Desktop view */}
      {isDesktopOrLaptop && 
        <Card style={{ width: '20rem' }} className='cards'>
      <Card.Header>
             <div className='card-vid'><VideoComponent vedioId={Id}/></div>
      </Card.Header>
   <Card.Body>
     <Card.Title style={{textAlign: 'center', fontSize: '16px'}}>{subject}</Card.Title>
     <Card.Text style={{textAlign:'center', fontSize: '15px', paddingBottom: '8px'}}>
       {detail}
     </Card.Text>
         <Card.Link href="https://youtube.com/@pharmaenclave1070?feature=shared">
             <div style={{justifyContent: 'center', justifyItems: 'center', display: 'flex',}}>
               <Button variant="dark" className='card-self-button'>Youtube Playlist</Button>
             </div>
         </Card.Link>
   </Card.Body>
 </Card>}
        {/*Card for Mobile view */}
      {isTabletOrMobile &&
        <Card style={{ width: '13rem' }} className='cards'>
         <Card.Header>
                <div className='card-vid'><VideoComponent vedioId={Id}/></div>
         </Card.Header>
      <Card.Body>
        <Card.Title style={{textAlign: 'center', fontSize: '16px'}}>{subject}</Card.Title>
        <Card.Text style={{textAlign:'center', fontSize: '15px', paddingBottom: '8px'}}>
          {detail}
        </Card.Text>
            <Card.Link href="https://youtube.com/@pharmaenclave1070?feature=shared">
                <div style={{justifyContent: 'center', justifyItems: 'center', display: 'flex',}}>
                  <Button variant="dark" className='card-self-button'>Youtube Playlist</Button>
                </div>
            </Card.Link>
      </Card.Body>
    </Card>}
 
       
    </div>
  )
}
