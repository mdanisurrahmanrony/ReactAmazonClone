import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0iC8LvHPU0aUgL9G9WId0p3yOXOh4nQ0",
  authDomain: "react--clone-2dd51.firebaseapp.com",
  projectId: "react--clone-2dd51",
  storageBucket: "react--clone-2dd51.appspot.com",
  messagingSenderId: "661128391116",
  appId: "1:661128391116:web:d6f252255212d7e56f5569",
  measurementId: "G-F1CT7XY7YY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };