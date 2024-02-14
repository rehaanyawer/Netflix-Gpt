import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleToggleGpt = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='fixed z-10 px-40 w-[100%] flex justify-between bg-gradient-to-b from-black'>
      <div className='flex items-center'>
        <img className='w-48 px-0' src={LOGO} alt='Logo' />

        {user && (
          <div className='text-white'>
            <ul className='flex gap-6 tracking-wider cursor-pointer'>
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <button
                className='bg-red-600 p-1 px-3 rounded-sm opacity-90 hover:bg-red-500'
                onClick={handleToggleGpt}
              >
                {showGptSearch ? 'Go Back' : 'GPT Search'}
              </button>
            </ul>
          </div>
        )}
      </div>

      {user && (
        <div className='flex text-white items-center p-5'>
          {showGptSearch && (
            <select
              className='p-2 m-2 rounded-sm bg-gray-900 text-white cursor-pointer'
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            className='w-10 h-10 mx-2'
            src={user?.photoURL}
            alt='user_icon'
          />
          <button
            onClick={handleSignOut}
            className='bg-red-600 p-1 px-3 rounded-sm opacity-90 hover:bg-red-500'
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
