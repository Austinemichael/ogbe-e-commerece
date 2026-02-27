// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZW3TQOKaHRiwa25p2J-6eRBNuYb7iHQ0",
  authDomain: "testdb-2dfef.firebaseapp.com",
  projectId: "testdb-2dfef",
  storageBucket: "testdb-2dfef.firebasestorage.app",
  messagingSenderId: "194538048211",
  appId: "1:194538048211:web:2361232087172ce68d2226",
  measurementId: "G-QPDLC000HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);