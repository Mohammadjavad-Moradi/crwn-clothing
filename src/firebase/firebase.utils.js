import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkCK4dZkuIpzHVlkcc6b4uwdvhlm_6uK8",
    authDomain: "crown-m.firebaseapp.com",
    databaseURL: "https://crown-m.firebaseio.com",
    projectId: "crown-m",
    storageBucket: "crown-m.appspot.com",
    messagingSenderId: "318392781349",
    appId: "1:318392781349:web:06e8b42a11976b3f654dcc",
    measurementId: "G-D4YZ4VXDHB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.massage)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
