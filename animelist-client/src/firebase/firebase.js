import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApforGDq9sZ71VtRzbOvgbAC0Jep-Hs1U",
  authDomain: "anilist-3b5c3.firebaseapp.com",
  projectId: "anilist-3b5c3",
  storageBucket: "anilist-3b5c3.firebasestorage.app",
  messagingSenderId: "635439066916",
  appId: "1:635439066916:web:ee085c6f96cba849104db1",
  measurementId: "G-1BYGYW35TS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
