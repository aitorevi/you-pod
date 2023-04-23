import {collection, deleteDoc, doc, getDocs, query, setDoc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {useState} from "react";

// export const CreatePodcastInDB = async (title: string, description: string, url: string) => {
//     // Guarda sin ID el documento, lo genera Firebase
//     //     const [docRef] = await Promise.all([addDoc(collection(db, "podcast"), {
//     //         title: title
//     //     })]);
//     //     console.log(docRef.id)
//
//     // Guarda con el ID "AI" el documento
//     const idCollection = title;
//     await setDoc(doc(db, "podcast", idCollection), {
//         title: title,
//         description: description,
//         url: url
//     });
// }
// export const ReadPodcastInDB = async () => {
//     const result = await getDocs(query(collection(db, "podcast")));
//     return result;
// }
export const UpdatePodcastInDB = async (id: string) => {
    {
        const docRef = await deleteDoc(doc(db, "podcast", id));
        setTimeout(async () => {
            window.location.reload()
        }, 500);

    }
}
// export const DeletePodcastInDB = async (id: string) => {
//     {
//         await deleteDoc(doc(db, "podcast", id));
//         setTimeout(async () => {
//          //   window.location.reload()
//         }, 500);
//
//     }
// }
