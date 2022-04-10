// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARGHBBo6SwD_uXd_Uka7ZX6U5RQlbEPOw",
    authDomain: "ema-john-simple-3a0bd.firebaseapp.com",
    projectId: "ema-john-simple-3a0bd",
    storageBucket: "ema-john-simple-3a0bd.appspot.com",
    messagingSenderId: "572972924557",
    appId: "1:572972924557:web:37dc71a90bf01829c02cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;