import {initializeApp} from 'firebase/app';
import 'firebase/compat/auth';

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth'

import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    writeBatch,
} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBHFQcbflU2jvxl1qRIirO9KPH5BHjoxBo",
    authDomain: "charity-react-tutor.firebaseapp.com",
    projectId: "charity-react-tutor",
    storageBucket: "charity-react-tutor.appspot.com",
    messagingSenderId: "321437447284",
    appId: "1:321437447284:web:41ce900657987d4cfe8d21"

};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd,
    field = 'title',
) => {

    const collectionRef = collection(database, collectionKey);

    const batch = writeBatch(database);


    objectsToAdd.forEach((object) => {

        const title = object[field].toLowerCase();

        const docRef = doc(collectionRef, title);
        batch.set(docRef, object);
    });

    await batch.commit();


}

export const getCategoriesAndDocuments = async () => {

    const collectionRef = collection(database, 'merch');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(database, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
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
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);