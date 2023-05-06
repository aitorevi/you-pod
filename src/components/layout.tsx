import Head from "next/head";
import Nav from "@/components/navbar";
import FooterSimple from "@/components/footer";
import React from "react";

type MyLayoutProps = {
    props: string,
    children: JSX.Element,
};
const Layout = (props: MyLayoutProps) => {
    return (
        <>
            <Head>
                <title>Podcast</title>
                <meta name="página de podcast para profesionales del sector TIC" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Nav/>
            {props.children}
            <FooterSimple/>
        </>
    )
}
export default Layout;