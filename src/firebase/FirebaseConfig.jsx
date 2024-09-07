import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCobhyTDEgZ-BCMb9j1MaJMjPY6Z7VXrFU",
  authDomain: "myfirstapp-a068a.firebaseapp.com",
  projectId: "myfirstapp-a068a",
  storageBucket: "myfirstapp-a068a.appspot.com",
  messagingSenderId: "355386607210",
  appId: "1:355386607210:web:9f3a9bbcf2247a13dcec13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB=getFirestore(app);
const auth=getAuth(app);

export {fireDB,auth}