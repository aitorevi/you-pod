import React from "react";
import '../firebase/firebase'
import SignInPage from "../components/sign_in";
import {signOut} from "next-auth/react";
import {Button} from "@chakra-ui/react";
import {buscarEpisodio, buscarUsuario} from "../../database/dbUsers";

export default function Home() {
    // const {status} = useSession({required: true})
    // if (status === 'authenticated') {

    return (
        <>
            <h1>Hola, esta es la pagina de inicio de la aplicacion cuando estas logueado</h1>
            <Button onClick={() => signOut()}>Salir</Button>
            <div>
                <p>Welcome</p>
                <Button onClick={() => signOut()}>Sign out</Button>
            </div>
        </>
    )
// }
    // }else{
    //     <p>Res de res</p>;
    // }
}

// TODO: Eliminar estas funciones
buscarEpisodio().then(r => r);
buscarUsuario().then(r => r)