import * as firebase from 'firebase/app'
import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyAVSszLpSibGZI3qyiRTR-rGB4oI4gz57o",
        authDomain: "exam-project-5d980.firebaseapp.com",
        projectId: "exam-project-5d980",
        storageBucket: "exam-project-5d980.appspot.com",
        messagingSenderId: "894202754112",
        appId: "1:894202754112:web:1ed547aa865278f26f9ba5",
        databaseURL: "exam-project-5d980.firebaseio.com"
      };

const app = firebase.initializeApp(firebaseConfig)

//set up authentication
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
signInWithRedirect(auth, provider);





export {provider, auth, signInWithRedirect, signOut, firebaseConfig, app}