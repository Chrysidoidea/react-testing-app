import {initializeApp} from "firebase/app";
import "firebase/compat/auth";

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    User,
} from "firebase/auth"

import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    writeBatch,
    WithFieldValue,
    DocumentReference,
    FirestoreDataConverter
} from "firebase/firestore"

import {Category} from "../../store/categories/categories.reducer";

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

export const addCollectionAndDocuments = async <T extends WithFieldValue<Document>>(
    collectionKey:string,
    objectsToAdd: T[],
    field: keyof T = "title" as keyof T,

): Promise<void> => {

    const collectionRef = collection(database, collectionKey);
    const batch = writeBatch(database);


    objectsToAdd.forEach((object) => {

        const title = String(object[field]).toLowerCase();
        const docRef = doc(collectionRef, title);
        batch.set(docRef, object);

    });

    await batch.commit();

}

export const getCategoriesAndDocuments = async (collectionName: string): Promise<Category[]> => {

    const collectionRef = collection(database, collectionName);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
}

type UserDocument = {
    displayName: string | null;
    email: string | null;
    createdAt: Date;
    [key: string]: any;
};

const userDocumentConverter: FirestoreDataConverter<UserDocument> = {
    toFirestore: (data: UserDocument) => data,
    fromFirestore: (snapshot, options) =>
        snapshot.data(options) as UserDocument,
};

export const createUserDocumentFromAuth = async (

    userAuth: User | null,
    additionalInfo: Record<string, any> = {}

): Promise<DocumentReference<UserDocument> | undefined> => {
    if (!userAuth) return;

    const userDocRef = doc(
        database,
        "users",
        userAuth.uid
    ).withConverter(userDocumentConverter);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc<UserDocument>(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (error) {
            console.log("Sorry but we have some issue:", (error as Error).message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email:string, password:string) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email:string, password:string) => {
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


// export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);