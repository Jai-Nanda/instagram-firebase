import firebase from "firebase/app";

const firebaseApp = {
  apiKey: "AIzaSyAQSqeo2h3rwLG99luCciJRebZ94Ws8mbc",
  authDomain: "instagram-clone-39411.firebaseapp.com",
  projectId: "instagram-clone-39411",
  storageBucket: "instagram-clone-39411.appspot.com",
  messagingSenderId: "970233434068",
  appId: "1:970233434068:web:a4b4584107e12c26381041",
  measurementId: "${config.measurementId}"
};

// firebaseApp.initializeApp(firebaseApp);
const app = firebase.initializeApp(firebaseApp);
// const dataBase = firebase.firestore();
const dataBase = firebase.firestore;
// const dataBase = db.getFirestore(firebaseApp);
const storage = firebase.storage;
const auth = firebase.auth;

export { dataBase, auth, storage };