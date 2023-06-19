// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBs1KubPKqdovrZQYlOSjgfZDc9yo4lKVo",
    authDomain: "warhosty.firebaseapp.com",
    projectId: "warhosty",
    storageBucket: "warhosty.appspot.com",
    messagingSenderId: "553154898540",
    appId: "1:553154898540:web:545fbb15b583df7e1b8649",
    measurementId: "G-PB44VTCEMB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
export { db, auth };
