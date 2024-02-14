import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';

const GPTSearch = () => {
  return (
    <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg')] h-[70rem]">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
