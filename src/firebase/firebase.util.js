import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

const config={
    apiKey: "AIzaSyBchSlXceg7uO8GQCCiOlSe02EzQqJpdE8",
    authDomain: "crown-db-82479.firebaseapp.com",
    projectId: "crown-db-82479",
    storageBucket: "crown-db-82479.appspot.com",
    messagingSenderId: "280034474822",
    appId: "1:280034474822:web:850d7125c71b3a6c4e8347",
    measurementId: "G-38WXM13DDV"
  };
  firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
