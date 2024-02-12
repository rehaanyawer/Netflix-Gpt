/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h1 className='py-6 text-lg w-1/4'>{overview}</h1>
      <div>
        <button className='bg-gray-500 text-white p-4 rounded-lg px-12 text-xl bg-opacity-50'>
          ▶ Play
        </button>
        <button className='mx-2 bg-gray-500 text-white p-4 rounded-lg px-12 text-xl bg-opacity-50'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
