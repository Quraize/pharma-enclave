import CardComp from "./CardComp";
import Carousel from 'react-bootstrap/Carousel';
import './CarouselCompStyles.css';


const CarouselComp = ({Items}) => {
   const items = [...Items];
      return (
         <div>
            <Carousel data-bs-theme="dark" className='trailing-carousel' indicators  slide touch={true}>
               {items.map((item) => (
                  <Carousel.Item key={item.key}>
                     <CardComp Id={item.Id} subject={item.subject} 
                     detail={item.Detail}/>
                  </Carousel.Item>
              ) )}
             </Carousel>
         </div>
       )
}

export default CarouselComp;