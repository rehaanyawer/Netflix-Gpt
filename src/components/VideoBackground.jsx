import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className=''>
      <iframe
        className='w-screen aspect-video h-full'
        src={
          'https://www.youtube.com/embed/' +
          trailerVideo?.key +
          '?autoplay=1&loop=1&mute=1&playlist=' +
          trailerVideo?.key +
          '&showinfo=0'
        }
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
