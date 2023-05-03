import {db} from "@/firebase/firebase";
import {doc, deleteDoc} from "firebase/firestore";

export const DeletePodcastInDB = async (id :string) => {
    {
        await deleteDoc(doc(db, "podcast", id));
        setTimeout(async () => {
            window.location.reload()
        }, 500);

    }
}