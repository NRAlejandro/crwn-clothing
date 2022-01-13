import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAE68zac6J84xFQxstPny6UlzRAnoSMYJ4",
    authDomain: "crwn-db-3657a.firebaseapp.com",
    projectId: "crwn-db-3657a",
    storageBucket: "crwn-db-3657a.appspot.com",
    messagingSenderId: "1000425549038",
    appId: "1:1000425549038:web:b03372681f072e717c17ff",
    measurementId: "G-8HN8C87WMB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;