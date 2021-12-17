import firebase from 'firebase'
import 'firebase/auth' 
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCh-kdAZdnUizme7_XAGetr6eSf1tOoGP4",
  authDomain: "olx-project-76263.firebaseapp.com",
  projectId: "olx-project-76263",
  storageBucket: "olx-project-76263.appspot.com",
  messagingSenderId: "753246572813",
  appId: "1:753246572813:web:b79a675e9afc8db3482044",
  measurementId: "G-Y6734G2N7R"
};

export default firebase.initializeApp(firebaseConfig)