import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvvtzTa4gS4KGHKbnkAWHu99imN9mCb7E",
  authDomain: "chat-ifpr.firebaseapp.com",
  projectId: "chat-ifpr",
  storageBucket: "chat-ifpr.appspot.com",
  messagingSenderId: "245624207636",
  appId: "1:245624207636:web:25a73f2abc8c7c4a96aa01"
};

//Inicializando Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export {auth, app, db};