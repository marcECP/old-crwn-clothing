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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.mesaage);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
