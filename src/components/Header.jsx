import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className='fixed z-10 px-40 w-[100%] flex justify-between'>
      <div className='w-60'>
        <img
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='Logo'
        />
      </div>
      {user && (
        <div className='flex text-white items-center p-5'>
          <img
            className='w-10 h-10 mx-2'
            src={user?.photoURL}
            alt='user_icon'
          />
          <button
            onClick={handleSignOut}
            className='bg-red-600 p-1 rounded-sm opacity-90 hover:bg-red-500'
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
