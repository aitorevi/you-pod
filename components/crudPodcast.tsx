// Guarda el documento sin Id y Firebase le asigna uno automáticamente
// const CreatePodcastInDB = async (title: string, description: string, url: string) => {
//     const [docRef] = await Promise.all([addDoc(collection(db, "podcast"), {
//         title: title,
//         description: description,
//         url: url,
//         createAt: Date(),
//     })]);
//     console.log(docRef.id)
// }

// Guarda el documento con el Id deseado el documento
// const CreatePodcastInDB = async (id: string, title: string, description: string, url: string) => {
//     await setDoc(doc(db, "podcast", id), {
//         title: title,
//         description: description,
//         url: url,
//         createAt: Date(),
//     });
// }
