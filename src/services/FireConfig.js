import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDoma_zcvsSUq7mlEz8OWCEY5RppQCihgw",
    authDomain: "react-reports.firebaseapp.com",
    projectId: "react-reports",
    storageBucket: "react-reports.appspot.com",
    messagingSenderId: "743006358061",
    appId: "1:743006358061:web:1e956af392efafd3b586a4",
    measurementId: "G-63VHZGM409",
    databaseURL: "https://react-reports-default-rtdb.europe-west1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

export { auth, db, storage};