// firebase/firestore.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWEeJCWEDvrw3SA6DMdXU2NSWBWV0MGis",
    authDomain: "mymaktehcafe-81d4e.firebaseapp.com",
    projectId: "mymaktehcafe-81d4e",
    storageBucket: "mymaktehcafe-81d4e",
    messagingSenderId: "28518221029",
    appId: "1:28518221029:web:56a93d30093f7c4d39c00c",
    measurementId: "G-FZXKYNHJP4"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
