import {db} from "../firebase/firebase";
import {doc, deleteDoc, addDoc, collection} from "firebase/firestore";

export const DeletePodcastInDB = async (id :string) => {
    {
        const docRef = await deleteDoc(doc(db, "podcast", id));
        console.log(id)
        setTimeout(async () => {
            window.location.reload()
        }, 500);

    }
}