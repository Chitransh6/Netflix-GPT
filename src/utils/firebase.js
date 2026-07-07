// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0XYiqO4pM2XZvKqZaldV132m38QyStCg",
  authDomain: "netflix-gpt-c3c1b.firebaseapp.com",
  projectId: "netflix-gpt-c3c1b",
  storageBucket: "netflix-gpt-c3c1b.firebasestorage.app",
  messagingSenderId: "721852323844",
  appId: "1:721852323844:web:28ae611c75264026473d51",
  measurementId: "G-M8XY5686GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();