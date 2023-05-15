// import React from "react";
// import {useSession, signOut, signIn, getSession} from "next-auth/react";
// import {Button} from "@chakra-ui/react";
//
// const useAccount = () => {
//     const {data: session, status} = useSession()
//     if (status === 'authenticated') {
//         return (
//             <div>
//                 <p>Welcome {session?.user?.name}</p>
//                 <Button onClick={() => signOut()}>Sign Out</Button>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <p>You are not signed in</p>
//                 <Button onClick={() => signIn()}>Sign In</Button>
//             </div>
//         )
//     }
//
// }
//
// export default useAccount
//
// export const getServerSideProps = async (context: any) => {
//     const session = await getSession(context)
//     if (!session) {
//         return (
//             {
//                 redirect: {
//                     destination: '/'
//                 }
//             }
//         )
//     }
//     return {
//         props: {session},
//     }
// }
import { useState } from 'react';
import 'firebase/storage';
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {storage} from "@/firebase/firebase";

export default function FileUploader() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };

    const handleUploadClick = () => {
        if (file) {
            setUploading(true);

            const metadata = {
                contentType: file.type
            };

            const storageRef = ref(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, (error) => {
                console.error(error);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUploading(false);
                });
            });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUploadClick} disabled={!file || uploading}>Subir archivo</button>
        </div>
    );
}