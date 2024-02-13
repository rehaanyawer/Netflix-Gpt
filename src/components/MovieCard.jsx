/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-72 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'>
      <img alt='Movie poster' className='' src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
