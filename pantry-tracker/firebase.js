// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firestore from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGQHSTzlwAKr45JcIFrs35ZQRglZnfvyY",
  authDomain: "pantry-tracker-773b9.firebaseapp.com",
  projectId: "pantry-tracker-773b9",
  storageBucket: "pantry-tracker-773b9.appspot.com",
  messagingSenderId: "393750364097",
  appId: "1:393750364097:web:8461eb5ec5af32d38d7940",
  measurementId: "G-ZWPSC5VKG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app, firestore}