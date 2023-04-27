import {addDoc, collection} from "firebase/firestore";
import {db} from "@/firebase/firebase";

export const InsertUserInDB = async (firstName: string, lastName: string, email: string, password: string) => {
    {
        const [docRef] = await Promise.all([addDoc(collection(db, "users"), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })]);
        console.log("Document written with ID: ", docRef.id);

    }
}