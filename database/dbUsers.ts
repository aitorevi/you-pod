import {db} from "@/firebase/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
export const buscarEpisodio = async () => {

    const podcastRef = collection(db, "podcast");

    const queryPodcast = query(podcastRef, where("title", "==", "Episodio 1: Tu formación es tu responsabilidad"));
    const querySnapshot = await getDocs(queryPodcast);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
    });
}

export const buscarUsuario = async () => {

    const userRef = collection(db, "users");

    const queryUsuario = query(userRef, where("name", "==", "Aitor"));
    const querySnapshot = await getDocs(queryUsuario);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
    });
}
