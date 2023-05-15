import {getProviders, getSession} from "next-auth/react";
import React from "react";
import SignInPage from "../../components/sign_in";

export default function SignIn(providers) {
    return (
        <SignInPage providers={providers}/>
    );
}

export const getServerSideProps = async (context) => {
    const providers = await getProviders();
    const session = await getSession(context);
    if (session) {
        return {
            props: { providers },
            redirect: {
                destination: "/",
            },
        };
    }
    return {
        props: { providers },
    };
};