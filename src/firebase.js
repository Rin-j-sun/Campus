// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQrKIC0zv46uXHgQtFCvV0aMF0Y5uAqu8",
    authDomain: "campus-c76ce.firebaseapp.com",
    projectId: "campus-c76ce",
    storageBucket: "campus-c76ce.firebasestorage.app",
    messagingSenderId: "615716901817",
    appId: "1:615716901817:web:a96e2b3ef10a111617dc68",
    measurementId: "G-MKQQWTQXB4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const dataBase = getFirestore(app)

const analytics = getAnalytics(app);

export {
    dataBase,
    auth
}