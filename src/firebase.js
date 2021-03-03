import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbwd8eRR0E2XrYmVzAWryHphR9Z2C5YBk",
    authDomain: "interview-2cf22.firebaseapp.com",
    projectId: "interview-2cf22",
    storageBucket: "interview-2cf22.appspot.com",
    messagingSenderId: "616979939646",
    appId: "1:616979939646:web:b59b0f2512124c10f92c6f",
    measurementId: "G-LQPTXD7R0C"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export {db};