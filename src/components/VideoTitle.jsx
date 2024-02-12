/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video absolute pt-36 px-40 text-White'>
      <h1 className='text-6xl pr-96 text-white font-bold'>{title}</h1>
      <h1 className='py-6 text-white text-lg w-1/4'>{overview}</h1>
      <div>
        <button className='bg-white text-black font-semibold p-3 rounded-md px-12 text-xl hover:opacity-75'>
          ▶ Play
        </button>
        <button className='mx-2 bg-gray-500 font-semibold text-white p-3 rounded-md px-12 text-xl bg-opacity-50'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
