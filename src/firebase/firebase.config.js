// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnZ9eCNBoFCs2dnNA9a6sNZsbmlTPeNlg",
  authDomain: "the-news-dragon-2ddac.firebaseapp.com",
  projectId: "the-news-dragon-2ddac",
  storageBucket: "the-news-dragon-2ddac.appspot.com",
  messagingSenderId: "640373064773",
  appId: "1:640373064773:web:c7dfe49c748fdf4f5d4f2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;