import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCRSLloUp6-AK98Yg5xWqr9tUCc6sXRATc",
  authDomain: "learning-firebase-d66b7.firebaseapp.com",
  projectId: "learning-firebase-d66b7",
  storageBucket: "learning-firebase-d66b7.firebasestorage.app",
  messagingSenderId: "750965215373",
  appId: "1:750965215373:web:a344aa884761a488c252c4",
  databaseURL: "https://learning-firebase-d66b7-default-rtdb.firebaseio.com",
}

export const app = initializeApp(firebaseConfig)
