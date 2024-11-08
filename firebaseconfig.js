// Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNuHnchogeC1fSISyslABgERuFpJhMXMo",
    authDomain: "chatty-95ae8.firebaseapp.com",
    projectId: "chatty-95ae8",
    storageBucket: "chatty-95ae8.firebasestorage.app",
    messagingSenderId: "1090324750000",
    appId: "1:1090324750000:web:187b9a4312d454b2fb2575",
    measurementId: "G-LY87BBSXSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };