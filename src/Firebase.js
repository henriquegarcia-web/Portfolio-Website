// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAq-BlOPSmsGxWpjOqil2sWoTfKjTDqPm4",
  authDomain: "web-portfolio-henrique.firebaseapp.com",
  projectId: "web-portfolio-henrique",
  storageBucket: "web-portfolio-henrique.appspot.com",
  messagingSenderId: "524238191236",
  appId: "1:524238191236:web:fd19924a9ce349ec56e0d1",
  measurementId: "G-JCXZZ1CM6P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);