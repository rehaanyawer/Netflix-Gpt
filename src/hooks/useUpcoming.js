import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addUpComing } from '../utils/movieSlice';
import { useEffect } from 'react';

const useUpComing = () => {
  const dispatch = useDispatch();
  const getUpComing = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      options
    );
    const json = await data?.json();
    dispatch(addUpComing(json.results));
  };

  useEffect(() => {
    getUpComing();
  }, []);
};
export default useUpComing;
