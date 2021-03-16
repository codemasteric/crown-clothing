import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWvlsmFnQnwDYmS8qX6rVIaB5zshueeJs",
    authDomain: "crwn-db-febce.firebaseapp.com",
    projectId: "crwn-db-febce",
    storageBucket: "crwn-db-febce.appspot.com",
    messagingSenderId: "129313554690",
    appId: "1:129313554690:web:1880878f6eaf4780da821b",
    measurementId: "G-NQZKTTD344"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;