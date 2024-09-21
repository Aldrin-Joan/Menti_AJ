// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtusvfeh1CIi90BLaLuIp9qkyH7OL2flI",
  authDomain: "menti-vitb.firebaseapp.com",
  projectId: "menti-vitb",
  storageBucket: "menti-vitb.appspot.com",
  messagingSenderId: "15157943816",
  appId: "1:15157943816:web:4f49eebfc73aed746afbbd",
  measurementId: "G-XP2TR3QSXY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};