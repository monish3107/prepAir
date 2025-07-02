import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAArXXVqrPU7eRp3AsE2wM5dsezca_4nD8",
  authDomain: "prepair-7bc49.firebaseapp.com",
  projectId: "prepair-7bc49",
  storageBucket: "prepair-7bc49.firebasestorage.app",
  messagingSenderId: "121629244026",
  appId: "1:121629244026:web:1dd14e719ad3be216959c3",
  measurementId: "G-51GH8974XT"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);