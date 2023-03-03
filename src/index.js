// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaXgBZcBkfZRF5X-YPNFhvY-C7ufceAWg",
  authDomain: "ababonfirebase.firebaseapp.com",
  projectId: "ababonfirebase",
  storageBucket: "ababonfirebase.appspot.com",
  messagingSenderId: "809851666126",
  appId: "1:809851666126:web:ef2f47cb874fd27380da9f",
  measurementId: "G-DB5B08LYHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
