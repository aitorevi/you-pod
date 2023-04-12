import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "AIzaSyAIKVJumt-R3lLyBYyMhNcJEDwbIjt_wic",
    authDomain: "you-pod.firebaseapp.com",
    projectId: "you-pod",
    storageBucket: "you-pod.appspot.com",
    messagingSenderId: "365678290020",
    appId: "1:365678290020:web:c60a615813e57a27edab71",
    measurementId: "G-GE10EZYXYZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);