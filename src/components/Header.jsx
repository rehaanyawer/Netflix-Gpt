import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
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

  return (
    <div className='fixed z-10 px-40 w-[100%] flex justify-between'>
      <div className='w-60'>
        <img src={LOGO} alt='Logo' />
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
