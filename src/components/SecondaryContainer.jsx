import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <div className='bg-black text-white -mt-72'>
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Top Rated'} movies={movies.topRated} />
        <MovieList title={'Popular'} movies={movies.popularMovies} />
        <MovieList title={'Up Coming'} movies={movies.upComing} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
