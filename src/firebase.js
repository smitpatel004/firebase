// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9e0A8WvJGz7z9qrmSEnXvWrMfgLkZfw",
  authDomain: "fir-fc26b.firebaseapp.com",
  projectId: "fir-fc26b",
  storageBucket: "fir-fc26b.firebasestorage.app",
  messagingSenderId: "213206755203",
  appId: "1:213206755203:web:3e5917d0f0961406ca38b6",
  databaseURL:"https://fir-fc26b-default-rtdb.firebaseio.com"

};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);