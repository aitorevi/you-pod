import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import React from "react";
export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}
