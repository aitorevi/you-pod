import '@/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import React from "react";
import {SessionProvider} from "next-auth/react";

type AppPropsType = {
    Component: any;
    pageProps: any;
    session: any;
}
export default function App({Component, pageProps}: AppPropsType) {
    return (
        <>
            <SessionProvider>
                <ChakraProvider>
                    <Component {...pageProps} />
                </ChakraProvider>
            </SessionProvider>
        </>
    )
}
