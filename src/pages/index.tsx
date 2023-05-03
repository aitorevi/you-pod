import React from "react";
import '../firebase/firebase'
import SignInPage from "../components/sign_in";
import {useSession} from "next-auth/react";
import Podcast from "@/pages/podcast";

export default function Home() {
    const {data: session} = useSession()
    return (
        <>
            {session ?
            <Podcast/>
            :
            <SignInPage/>
            }
        </>
    )
}