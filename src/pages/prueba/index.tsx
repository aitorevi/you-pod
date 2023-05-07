import React from "react";
import '../../firebase/firebase'
import {useSession} from "next-auth/react";
import Layout from "@/components/layout";
import CustomSpinner from "@/components/custom_spinner";
import HomePage2 from "@/components/prueba";
export default function Home() {
    const {status} = useSession({required: true});

    if (status === "authenticated") {
        return (
            <>
                <Layout props={''}>
                    <HomePage2/>
                </Layout>
            </>
        )

    } else {
        return (
            <CustomSpinner/>
        )
    }
}