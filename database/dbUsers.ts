import {db} from "@/firebase/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";

// export const checkUserEmailPassword = async (email: string, password: string) => {
//     await db.app
// }

// Create a reference to the cities collection
export const buscarEpisodio = async () => {

    const podcastRef = collection(db, "podcast");

// Create a query against the collection.
    const consultaPodcast = query(podcastRef, where("title", "==", "Episodio 1: Tu formación es tu responsabilidad"));
    const querySnapshot = await getDocs(consultaPodcast);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}

export const buscarUsuario = async () => {

    const userRef = collection(db, "users");

// Create a query against the collection.
    const consultaUsuario = query(userRef, where("name", "==", "Aitor"));
    const querySnapshot = await getDocs(consultaUsuario);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}
