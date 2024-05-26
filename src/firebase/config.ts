// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo1PuJS6lRMGwwHuEKeJ_Glg71GQM2lM0",
  authDomain: "vue-player-561f8.firebaseapp.com",
  projectId: "vue-player-561f8",
  storageBucket: "vue-player-561f8.appspot.com",
  messagingSenderId: "936490231308",
  appId: "1:936490231308:web:73d9bc33498fd6128b7029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
