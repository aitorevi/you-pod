import React from "react";
import '../firebase/firebase'
import SignInPage from "../components/sign_in";
import {signOut, useSession} from "next-auth/react";
import {Button} from "@chakra-ui/react";

export default function Home() {
    const {status} = useSession({required: true})
    if (status === 'authenticated') {
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
    }else{
        <p>Res de res</p>;
    }
}