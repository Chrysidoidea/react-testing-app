import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
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

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(database, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Sorry but we have some issue:', error.message);
        }
    }

     return userDocRef;
}
