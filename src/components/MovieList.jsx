/* eslint-disable react/prop-types */
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className='p-6 py-4'>
        <h1 className='font-bold text-2xl py-3'>{title}</h1>
        <div className='flex overflow-x-auto overflow-y-hidden movies-list scroll-smooth relative z-50'>
          <div className='flex gap-9'>
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.backdrop_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
