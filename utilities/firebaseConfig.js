import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgOmEm__b5UegRzykRubj1aYDdSadDENI",
    authDomain: "vue-live-chat-a.firebaseapp.com",
    projectId: "vue-live-chat-a",
    storageBucket: "vue-live-chat-a.appspot.com",
    messagingSenderId: "102173321836",
    appId: "1:102173321836:web:ae347c49ed9ea1ff3f4649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Auth and get a reference to the service
export const auth = getAuth(app);

