// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//email:healthcare  flavor-book
/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyDidU2bsQDVEiljW8iEJO-IISH6Tg1FLU8",

  authDomain: "project-ac54c.firebaseapp.com",

  projectId: "project-ac54c",

  storageBucket: "project-ac54c.firebasestorage.app",

  messagingSenderId: "1012386726541",

  appId: "1:1012386726541:web:02dd65a0d12ab26ba818c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
