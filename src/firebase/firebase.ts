import {getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import * as process from "process"

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            window.location.href = "/podcast";
            //console.log(result)
        })
        .catch((error) => {
            console.log(error)
        });
}

export const db = getFirestore(app);