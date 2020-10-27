import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {

    apiKey: "AIzaSyBVgNxB700hpQuYi8a_M3qR-Rn12yNLeK4",
    authDomain: "oattsbeauty.firebaseapp.com",
    databaseURL: "https://oattsbeauty.firebaseio.com",
    projectId: "oattsbeauty",
    storageBucket: "oattsbeauty.appspot.com",
    messagingSenderId: "408233131187",
    appId: "1:408233131187:web:2b48b3ba1ab2283e0384c6"

}

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

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
        } catch(error) {
            console.log('error creating user', error.mesage)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

