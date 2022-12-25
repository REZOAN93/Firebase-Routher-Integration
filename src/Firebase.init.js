// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFBN0cBh5F7i5W7JrifgF2uayB7z4El38",
  authDomain: "router-firebase-integrat-b9390.firebaseapp.com",
  projectId: "router-firebase-integrat-b9390",
  storageBucket: "router-firebase-integrat-b9390.appspot.com",
  messagingSenderId: "134548781859",
  appId: "1:134548781859:web:6f5068cbaaec01dcd12a96",
  measurementId: "G-VF38K3G018",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
