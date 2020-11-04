import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDMUR9GLGqfviWSjyOeqZXteh66vw6ETSE',
  authDomain: 'fr-crwn-db-3b78c.firebaseapp.com',
  databaseURL: 'https://fr-crwn-db-3b78c.firebaseio.com',
  projectId: 'fr-crwn-db-3b78c',
  storageBucket: 'fr-crwn-db-3b78c.appspot.com',
  messagingSenderId: '68755934679',
  appId: '1:68755934679:web:4f4b3b99bd2ccfa25acf92',
  measurementId: 'G-YSSHGGFR8E',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
