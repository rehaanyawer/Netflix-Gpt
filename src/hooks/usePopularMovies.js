import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      options
    );
    const json = await data?.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopular();
  }, []);
};
export default usePopularMovies;
