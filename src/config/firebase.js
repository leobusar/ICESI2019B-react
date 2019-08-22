import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB2FOodMMP9auth5WK_nNUUJbHdpG4K7Vg",
    authDomain: "usuarios-14b15.firebaseapp.com",
    databaseURL: "https://usuarios-14b15.firebaseio.com",
    projectId: "usuarios-14b15",
    storageBucket: "usuarios-14b15.appspot.com",
    messagingSenderId: "180041341533",
    appId: "1:180041341533:web:e40a5e1475fa9588"
  };

firebase.initializeApp(config);
export default firebase;