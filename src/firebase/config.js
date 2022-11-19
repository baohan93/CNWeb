// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGlEXkyu8s55vrPo0NhAOMP1k35ffCXSY",
  authDomain: "eshopp-1d1b0.firebaseapp.com",
  projectId: "eshopp-1d1b0",
  storageBucket: "eshopp-1d1b0.appspot.com",
  messagingSenderId: "485378701723",
  appId: "1:485378701723:web:ed8fec656f910f4fb2893e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app
