import React from "react";
import '../firebase/firebase'
import {useSession} from "next-auth/react";
import Layout from "@/components/layout";
import Homepage from "@/components/home_page";
import {buscarEpisodio, buscarUsuario} from "../../database/dbUsers";
import CustomSpinner from "@/components/custom_spinner";
export default function Home() {
    const {status} = useSession({required: true});

    if (status === "authenticated") {
        return (
            <>
                <Layout props={''}>
                    <Homepage/>
                </Layout>
            </>
        )

    } else {
        return (
            <CustomSpinner/>
        )
    }
}
// TODO: Eliminar estas funciones
buscarEpisodio().then(r => r);
buscarUsuario().then(r => r)