import firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyBr90X6fK06qjY-IpNn_mDZtgpd84SoUUI",
  authDomain: "whatsapp-2-a50a0.firebaseapp.com",
  projectId: "whatsapp-2-a50a0",
  storageBucket: "whatsapp-2-a50a0.appspot.com",
  messagingSenderId: "529194914870",
  appId: "1:529194914870:web:d1f7d23be7e28ab88d3497"
 };

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };