// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAlxm909JuEhKY5lP8WhPhuzWUCAxUps0A",
  authDomain: "astreya-d1fa3.firebaseapp.com",
  projectId: "astreya-d1fa3",
  storageBucket: "astreya-d1fa3.appspot.com", // ✅ diperbaiki
  messagingSenderId: "429863063002",
  appId: "1:429863063002:web:d8baa29010f5bc485144e3",
  measurementId: "G-6Z24G5MLRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
