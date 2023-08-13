import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMYqxvwDLq1SlQ-iIEZr028UkxEGiYkGY",
    authDomain: "gpt-project-f5c3a.firebaseapp.com",
    projectId: "gpt-project-f5c3a",
    storageBucket: "gpt-project-f5c3a.appspot.com",
    messagingSenderId: "472299508552",
    appId: "1:472299508552:web:5e46c5adbcd9b53730d97d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };