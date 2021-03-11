import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjLX3_YDTVjxsOQd1ZExrFj1qHkqxl16E",
  authDomain: "crwn-db-fcb1a.firebaseapp.com",
  databaseURL: "https://crwn-db-fcb1a-default-rtdb.firebaseio.com",
  projectId: "crwn-db-fcb1a",
  storageBucket: "crwn-db-fcb1a.appspot.com",
  messagingSenderId: "1069644883021",
  appId: "1:1069644883021:web:c287c7c15308edd5ade804",
  measurementId: "G-8WE7PN9KKT",
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
      console.log("error creating user");
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
