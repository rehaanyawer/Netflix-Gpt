import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div>
      <iframe
        width='560'
        height='315'
        src={'https://www.youtube.com/embed/7u3zBVAxx_w' + trailerVideo?.key}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
