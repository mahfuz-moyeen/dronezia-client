import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgbGa3gq9YpZVePsMXy7-_49jTYFkbJZc",
    authDomain: "dronezia.firebaseapp.com",
    projectId: "dronezia",
    storageBucket: "dronezia.appspot.com",
    messagingSenderId: "94666143573",
    appId: "1:94666143573:web:2d39084e287097e3e921dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;