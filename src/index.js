import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";



const firebaseConfig = {
apiKey: "AIzaSyCaXgBZcBkfZRF5X-YPNFhvY-C7ufceAWg",
authDomain: "ababonfirebase.firebaseapp.com",
databaseURL: "https://ababonfirebase-default-rtdb.firebaseio.com",
projectId: "ababonfirebase",
storageBucket: "ababonfirebase.appspot.com",
messagingSenderId: "809851666126",
appId: "1:809851666126:web:ef2f47cb874fd27380da9f",
measurementId: "G-DB5B08LYHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

// firebaseApps previously initialized using initializeApp()
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);