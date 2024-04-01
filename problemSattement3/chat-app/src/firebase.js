// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcJtETPatk5lCXMwvkUTzSSi6QJVHJU6M",
  authDomain: "chat-app-cdf08.firebaseapp.com",
  projectId: "chat-app-cdf08",
  storageBucket: "chat-app-cdf08.appspot.com",
  messagingSenderId: "626462134029",
  appId: "1:626462134029:web:044db7963da19f7e0eea44",
  measurementId: "G-MZXKM650C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export default firebase;








/*
const firebaseConfig = {
    apiKey: "AIzaSyDcJtETPatk5lCXMwvkUTzSSi6QJVHJU6M",
  authDomain: "chat-app-cdf08.firebaseapp.com",
  projectId: "chat-app-cdf08",
  storageBucket: "chat-app-cdf08.appspot.com",
  messagingSenderId: "626462134029",
  appId: "1:626462134029:web:044db7963da19f7e0eea44",
  measurementId: "G-MZXKM650C7"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
*/