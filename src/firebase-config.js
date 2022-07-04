import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAASIOmRZ8rzIquX19vkH76lZfusjACEVg",
    authDomain: "fire-5630e.firebaseapp.com",
    projectId: "fire-5630e",
    storageBucket: "fire-5630e.appspot.com",
    messagingSenderId: "929851898685",
    appId: "1:929851898685:web:a09400bdf58e29cbbda354",
    measurementId: "G-MHVPRKGDFK"
  };
  
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)