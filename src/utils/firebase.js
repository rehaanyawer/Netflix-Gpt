// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCSIMfZamq5De7JdBYSMSeeUwZ-5V4MaoU',
  authDomain: 'netflixgpt-de4e3.firebaseapp.com',
  projectId: 'netflixgpt-de4e3',
  storageBucket: 'netflixgpt-de4e3.appspot.com',
  messagingSenderId: '27637599152',
  appId: '1:27637599152:web:e4347e590705c6fe272475',
  measurementId: 'G-3FNK65V2YS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
