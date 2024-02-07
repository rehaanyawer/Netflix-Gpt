import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidEmail } from '../utils/Validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);

  const [message, setMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const error = checkValidEmail(email.current.value, password.current.value);
    setMessage(error);

    if (message) return;

    if (!isSignIn) {
      //signup code
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstName.current.value,
            photoURL:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKN0shZqigIf-VDJIJHRIoQY34NHc5LgLBoVy8dMbxvq-3J2T_x__4q8SrCo8o1dYWzHs&usqp=CAU',
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log(auth);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              setIsSignIn(true);
              navigate('/browse');
              password.current.value = '';
            })
            .catch((error) => {
              // An error occurred
              setMessage(error.message);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + ' ' + errorMessage);
          navigate('/');
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate('/Browse');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ' ' + errorMessage);
          setMessage(error.message);
        });

      //signin code
    }
  };
  return (
    <>
      <Header />
      <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg')] h-[70rem]">
        <div className='bg-black/50 h-[70rem]'>
          <form
            onSubmit={(e) => e.preventDefault()}
            className='max-w-[30%] h-[44rem] rounded-md bg-black bg-opacity-70 absolute right-0 left-0 m-auto my-20 p-14 text-white'
          >
            <h1 className='text-3xl font-bold pb-4'>
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </h1>
            {!isSignIn && (
              <input
                ref={firstName}
                className='p-4 my-3 w-full bg-transparent border border-white rounded-md shadow-2xl '
                type='text'
                placeholder='Firstname'
              />
            )}

            <input
              ref={email}
              className='p-4 my-3 w-full bg-transparent border border-white rounded-md shadow-2xl'
              type='text'
              placeholder='E-mail or phone number'
            />
            {/* <label className='text-red-500 text-sm'>
              Please enter a valid email address or phone number.
            </label> */}
            <input
              ref={password}
              className='p-4 my-3 w-full bg-transparent  border border-white rounded-md shadow-2xl'
              type='password'
              placeholder='Password'
            />

            {message && (
              <label className='text-red-500 text-sm'>
                Please enter a valid {message}
              </label>
            )}
            <button
              onClick={handleButtonClick}
              className='p-2 my-3 w-full bg-red-600 hover:bg-red-700 rounded-md shadow-2xl'
            >
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
            <div className='text-center'>
              {!isSignIn ? (
                ''
              ) : (
                <button className='hover:text-gray-400 hover:underline cursor-pointer'>
                  Forgot Password?
                </button>
              )}
            </div>

            <div className='py-1'>
              <div className='py-4'>
                <input
                  id='myCheckbox'
                  type='checkbox'
                  className='w-4 h-4 mr-3 hover:bg-gray-400 cursor-pointer'
                />
                <label htmlFor='myCheckbox' className=''>
                  Remember me
                </label>
              </div>

              <div>
                <span className='hover: text-gray-300'>
                  {isSignIn ? 'New to Netflix?' : 'Already Registered?'}
                </span>

                <span
                  onClick={() => setIsSignIn(!isSignIn)}
                  className='font-semibold hover:underline cursor-pointer'
                >
                  {isSignIn ? ' Sign up now' : ' Sign in now.'}
                </span>
                <p className='py-4 text-gray-400  font-normal text-xs'>
                  This page is protected by Google reCAPTCHA to ensure you are
                  not a bot.{' '}
                  <a href='#' className='text-blue-500 hover:underline'>
                    Learn More.
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
