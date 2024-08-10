import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "pigeons-7f8aa.firebaseapp.com",
  projectId: "pigeons-7f8aa",
  storageBucket: "pigeons-7f8aa.appspot.com",
  messagingSenderId: "721895143479",
  appId: "1:721895143479:web:1f627c951210ae49c5a7b2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();