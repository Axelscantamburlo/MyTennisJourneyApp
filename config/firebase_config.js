import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCAxgdRKHQ3RjTRdahy9J4txm_FNJG_3aY",
  authDomain: "mytennisjourney-84bae.firebaseapp.com",
  projectId: "mytennisjourney-84bae",
  storageBucket: "mytennisjourney-84bae.appspot.com",
  messagingSenderId: "373107491727",
  appId: "1:373107491727:web:85d759d1d0a27b98b781fa",
  measurementId: "G-9SLGT8DZ97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
// const analytics = getAnalytics(app);