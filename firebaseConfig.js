import firebase from "firebase";
import 'firebase/auth';

  const firebaseConfig = {
  apiKey: "AIzaSyDoH0yOTzviNxK3hMkRxiQsCi_EUddJYNI",
  authDomain: "project-neimanassarmukas-2.firebaseapp.com",
  projectId: "project-neimanassarmukas-2",
  storageBucket: "project-neimanassarmukas-2.firebasestorage.app",
  messagingSenderId: "327259603008",
  appId: "1:327259603008:web:34fbbf88d975d305bedfa5",
  measurementId: "G-DH2VD9259N"
};

let app; 
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);

} else{
  app = firebase.app()
}

const db = firebase.firestore(); 
const auth = firebase.auth ();

export {db, auth}; 