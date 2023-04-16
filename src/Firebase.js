// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB5bLBI51Qv1VCoVRk-xyl4LX-5Xve17M",
  authDomain: "dont-click-it.firebaseapp.com",
  projectId: "dont-click-it",
  storageBucket: "dont-click-it.appspot.com",
  messagingSenderId: "821973361142",
  appId: "1:821973361142:web:bf57e3418a455c86d067d7",
  measurementId: "G-TBM9JZGQFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);