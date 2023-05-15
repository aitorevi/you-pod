import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import * as process from "process"
import { getStorage } from "@firebase/storage";

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
export const storage = getStorage(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const getUser = async () => {
    const user = await auth.currentUser
    return user
}
export const logIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        const user2 = auth.currentUser;
        return user
    } catch (error) {
        console.error("Error signing in: ", error);
    }
};


// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             window.location.href = "/";
//         })
//         .catch((error) => {
//         });
// }

