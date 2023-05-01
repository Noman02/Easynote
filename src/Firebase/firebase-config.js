// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtXr2N2UJqj3xj7D3E_l2qLwIEqBs8LEs",
  authDomain: "notes-keeper-a1ec8.firebaseapp.com",
  projectId: "notes-keeper-a1ec8",
  storageBucket: "notes-keeper-a1ec8.appspot.com",
  messagingSenderId: "226906840563",
  appId: "1:226906840563:web:2898d8ad26f9267f728686",
  measurementId: "G-8CXYH1L00Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore(app);
