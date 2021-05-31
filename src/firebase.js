import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD02ZOpjO-7Xu6OYCmoragy6eAFCYJZ26U",
  authDomain: "slack-6dbd2.firebaseapp.com",
  projectId: "slack-6dbd2",
  storageBucket: "slack-6dbd2.appspot.com",
  messagingSenderId: "1029314862604",
  appId: "1:1029314862604:web:2c5e695abe90a4565d1829",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
