
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDDjceJKM9Efp-LOHcquUJ8hyhfHIuxGM",
  authDomain: "fitness-tracker-87a4e.firebaseapp.com",
  projectId: "fitness-tracker-87a4e",
  storageBucket: "fitness-tracker-87a4e.firebasestorage.app",
  messagingSenderId: "634195889282",
  appId: "1:634195889282:web:ff39a0ecb5a3f907d3389b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

