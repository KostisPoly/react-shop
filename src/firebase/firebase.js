import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAHtGLVwXuwoLsqBpuS-RkNaI6A1JFog8s",
    authDomain: "react-shop-2021.firebaseapp.com",
    projectId: "react-shop-2021",
    storageBucket: "react-shop-2021.appspot.com",
    messagingSenderId: "301454677341",
    appId: "1:301454677341:web:56ab3cdec1f932476b04b4",
    measurementId: "G-ED3SJJHY6Q"
}

firebase.initializeApp(config);

//Check auth user then if no db snapshot create it and either way return the user ref in db!
export const createUserFrofile = async (user, otherData) => {
    if(!user) {
        return;
    }

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                otherData
            })
        } catch(error) {
            console.log('Error in create user -- '+error.message);
        }
    }

    return userRef;
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;