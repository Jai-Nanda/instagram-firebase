import firebase from 'firebase'
const app = firebase.initializeApp({
  apiKey: "AIzaSyBQk_842X_EwCKpxeT5Lt9T1TS88bmi4iY",
  authDomain: "instagram-5565a.firebaseapp.com",
  projectId: "instagram-5565a",
  storageBucket: "instagram-5565a.appspot.com",
  messagingSenderId: "243327529438",
  appId: "1:243327529438:web:f2c4fe706b8ba888e02d4f"
});
const db = app.firestore();
const auth = firebase.auth;
const storage = firebase.storage;

export { db , auth, storage };
export default app;
// const firebaseApp = {
  
//   apiKey: "AIzaSyAQSqeo2h3rwLG99luCciJRebZ94Ws8mbc",
//   authDomain: "instagram-clone-39411.firebaseapp.com",
//   projectId: "instagram-clone-39411",
//   storageBucket: "instagram-clone-39411.appspot.com",
//   messagingSenderId: "970233434068",
//   appId: "1:970233434068:web:a4b4584107e12c26381041",
//   measurementId: "${config.measurementId}"
// };

// // firebaseApp.initializeApp(firebaseApp);
// const app = firebase.initializeApp(firebaseApp);
// // const dataBase = firebase.firestore();
// const dataBase = firebase.firestore;
// // const dataBase = db.getFirestore(firebaseApp);
// const storage = firebase.storage;
// const auth = firebase.auth;

// export { dataBase, auth, storage };