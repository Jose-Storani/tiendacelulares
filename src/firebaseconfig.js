
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyArHG-KH1K4asVnZg1H1p2fSe8S6wUF_aU",
  authDomain: "proyectoreactcoder-6e3dd.firebaseapp.com",
  projectId: "proyectoreactcoder-6e3dd",
  storageBucket: "proyectoreactcoder-6e3dd.appspot.com",
  messagingSenderId: "601288353024",
  appId: "1:601288353024:web:e248ab3a3eb277f6e63fe5"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app); 