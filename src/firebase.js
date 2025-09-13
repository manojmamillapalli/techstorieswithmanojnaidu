import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyByhgA4YWA0uN3uNc4-OcUmFornGc-GwKU",
    authDomain: "techstorieswithmanojnaid-bf686.firebaseapp.com",
    projectId: "techstorieswithmanojnaid-bf686",
    storageBucket: "techstorieswithmanojnaid-bf686.firebasestorage.app",
    messagingSenderId: "321828446559",
    appId: "1:321828446559:web:2c46ca29c1d8ce0ffe96ea",
    measurementId: "G-T279LT0LBN",
    databaseURL: "https://techstorieswithmanojnaid-bf686-default-rtdb.firebaseio.com",
    authDomain: "techstorieswithmanojnaid-bf686.firebaseapp.com",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);