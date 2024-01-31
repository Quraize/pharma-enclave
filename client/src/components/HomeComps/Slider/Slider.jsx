import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/1logo.jpg';
import image2 from '../../../assets/2.jpg';
import image3 from '../../../assets/3Gs in smooth muscle.jpg';
import image4 from '../../../assets/4Gs in Cardiac Muscle.jpg';
import image5 from '../../../assets/5GPCRs General mech1.jpg';
import image6 from '../../../assets/6G inhibitory.jpg';
import './SliderStyles.css';

export default function Slider() {
  return (
    <div>
        <Carousel data-bs-theme="dark" onTouchMove={true} touch={true}>
        <Carousel.Item interval={1200}>
          <img
            className="image-sec"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="image-sec"
            src={image2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="image-sec"
            src={image3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="image-sec"
            src={image4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="image-sec"
            src={image5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="image-sec"
            src={image6}
            alt="First slide"
          />
        </Carousel.Item>
    </Carousel>
    </div>
  )
}
