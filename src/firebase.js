import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCQrKIC0zv46uXHgQtFCvV0aMF0Y5uAqu8",
    authDomain: "campus-c76ce.firebaseapp.com",
    projectId: "campus-c76ce",
    storageBucket: "campus-c76ce.firebasestorage.app",
    messagingSenderId: "615716901817",
    appId: "1:615716901817:web:a96e2b3ef10a111617dc68",
    measurementId: "G-MKQQWTQXB4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app); // Изменили имя на `db`
const analytics = getAnalytics(app);

export { db, auth, analytics }; // Экспортируем `db`
