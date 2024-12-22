// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6XhmlF3NULMW3pVOGfZvTmc76XihfpDQ",
    authDomain: "ryukingdom-48b31.firebaseapp.com",
    projectId: "ryukingdom-48b31",
    storageBucket: "ryukingdom-48b31.appspot.com",
    messagingSenderId: "360816489083",
    appId: "1:360816489083:web:84a84ba95a60f4006a68de",
    measurementId: "G-EGPDSHE3D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);