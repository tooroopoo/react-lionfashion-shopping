import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config=
    {
        apiKey: "AIzaSyCYrxCh-TEgeMFq3tXS6LlzxHEpOPVzDjE",
        authDomain: "lionfashion.firebaseapp.com",
        databaseURL: "https://lionfashion.firebaseio.com",
        projectId: "lionfashion",
        storageBucket: "lionfashion.appspot.com",
        messagingSenderId: "810178059008",
        appId: "1:810178059008:web:30157209dc7828c46331e5",
        measurementId: "G-3M9KYVZE7X"
      };


firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}) /*trigger google popup*/
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;