import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from './config.json'

firebase.initializeApp(config);

//Check auth user then if no db snapshot create it and either way return the user ref in db!
export const createUserProfile = async (user, otherData) => {
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
                ...otherData
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