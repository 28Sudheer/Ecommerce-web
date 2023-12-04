// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChJ-Pry1O4ILRrQujrxmmpUo9-eohRF5I",
  authDomain: "appmy-aabb1.firebaseapp.com",
  projectId: "appmy-aabb1",
  storageBucket: "appmy-aabb1.appspot.com",
  messagingSenderId: "282625697587",
  appId: "1:282625697587:web:b48ee6d5a869d432010046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);

export {fireDb,auth}