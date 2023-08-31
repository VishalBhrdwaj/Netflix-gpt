// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt6HFXrxAc9WOKmV-6KLAoJE7J_3ZKqjQ",
  authDomain: "vishalnetflixgpt.firebaseapp.com",
  projectId: "vishalnetflixgpt",
  storageBucket: "vishalnetflixgpt.appspot.com",
  messagingSenderId: "642132715756",
  appId: "1:642132715756:web:89c48e0b5eaba63f241dc9",
  measurementId: "G-JEN5VGPPH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();