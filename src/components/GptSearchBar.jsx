import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className=''>
        <input
          type='text'
          className='p-3 text-white my-3 w-[35rem] bg-black bg-opacity-70 border border-white rounded-md shadow-2xl mr-2'
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className='p-3 px-6 my-3 text-white bg-red-600 hover:bg-red-700 rounded-md shadow-2xl'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
