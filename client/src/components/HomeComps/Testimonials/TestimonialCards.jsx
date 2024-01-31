import Card from 'react-bootstrap/Card';
import './SliderStyles.css';

export default function TestimonialCards({stName, stDesig, stMessage, stImage, tags}) {
  return (
    <div>
         <Card style={{ width: '45rem', justifyContent: 'center', justifyItems: 'center', display: 'flex'}}>
                        <div style={ {paddingTop: '10px ',justifyContent: 'center', justifyItems: 'center', display: 'flex'} }><Card.Img variant="top" src={stImage} style={{borderRadius: '999px', height: '90px', width: '90px'}}/></div>
                        <Card.Body>
                            <Card.Title className='card-title'>{stName}</Card.Title>
                            <Card.Subtitle className='sub-heading'>{stDesig}</Card.Subtitle>
                            <Card.Text className='card-message'>
                               {stMessage}
                            </Card.Text>
                        </Card.Body>
                        <div className='footer'><Card.Footer>
                            <small>{tags}</small>
                        </Card.Footer></div>
                    </Card>
    </div>
  )
}
