// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL7vicyhetG7L8sIA4e260rW4CRmLAkFk",
  authDomain: "todo-app-yt-656e6.firebaseapp.com",
  projectId: "todo-app-yt-656e6",
  storageBucket: "todo-app-yt-656e6.appspot.com",
  messagingSenderId: "283737295970",
  appId: "1:283737295970:web:355fa6a36198935f13153b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)