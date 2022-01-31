
import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtZmSxb5mmoZIlFRNTPU8H6nY4TjPu8ZA",
  authDomain: "voosh-124be.firebaseapp.com",
  projectId: "voosh-124be",
  storageBucket: "voosh-124be.appspot.com",
  messagingSenderId: "169036737621",
  appId: "1:169036737621:web:c14882280e10e46978b8dc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
