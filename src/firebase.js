// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8jasTw7mXguGp4eTw2M4aJ70zN1-rmk0",
  authDomain: "realtor-react-project-92a63.firebaseapp.com",
  projectId: "realtor-react-project-92a63",
  storageBucket: "realtor-react-project-92a63.appspot.com",
  messagingSenderId: "647004056954",
  appId: "1:647004056954:web:82ce755d53d356d8f77ac3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();