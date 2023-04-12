import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase/firebase";
export const InsertEmailInDB = async (email: string) => {
    {
        const [docRef] = await Promise.all([addDoc(collection(db, "newsletter"), {
            email: email
        })]);
        console.log("Document written with ID: ", docRef.id);

    }
}
