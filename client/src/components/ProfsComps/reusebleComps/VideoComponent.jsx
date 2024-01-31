import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

// eslint-disable-next-line react/prop-types
const VideoComponent = ({vedioId}) => {
    return(
        <div>
    <LiteYouTubeEmbed 
        id={vedioId}
        title="Whats new in Material Design for the web (Chrome Dev Summit 2019)"
    />
  </div>
    );
};

export default VideoComponent;