// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-euh_CYpNtQtEQUY2FJKL_Anhpi8IxHo",
    authDomain: "techblaze26.firebaseapp.com",
    projectId: "techblaze26",
    storageBucket: "techblaze26.firebasestorage.app",
    messagingSenderId: "112006362626",
    appId: "1:112006362626:web:34a544bf2d5c5f3806191b",
    measurementId: "G-NMXT3KES1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase Analytics Initialized");
