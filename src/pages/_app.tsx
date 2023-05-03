import '@/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import {SessionProvider} from "next-auth/react";

type AppPropsType = {
    Component: any;
    pageProps: any;
    session: any;
}
export default function App({Component, pageProps}: AppPropsType) {
    return (
        <>
            <ChakraProvider>
                <SessionProvider session={pageProps.session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </ChakraProvider>

        </>
    )
}
