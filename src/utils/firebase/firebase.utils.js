import { initializeApp } from 'firebase/app';


import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBHFQcbflU2jvxl1qRIirO9KPH5BHjoxBo",
    authDomain: "charity-react-tutor.firebaseapp.com",
    projectId: "charity-react-tutor",
    storageBucket: "charity-react-tutor.appspot.com",
    messagingSenderId: "321437447284",
    appId: "1:321437447284:web:41ce900657987d4cfe8d21"

};

const firebaseApp = initializeApp(firebaseConfig);

const  provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const  auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(database, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (error) {
            console.log('Sorry but we have some issue:', error.message);
        }
    }

     return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

}

export const sighInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)

}




export const signOutUser = async () => await signOut(auth);



export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);