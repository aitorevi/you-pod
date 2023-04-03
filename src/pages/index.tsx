import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from '../../components/navbar'
import SmallWithNavigation from '../../components/footer'
import React from "react";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})
export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Nav/>
            <div className={styles.center}>

                {/*<div>*/}
                {/*    <Image*/}
                {/*        className={styles.logo}*/}
                {/*        src="/you-pod-text.svg"*/}
                {/*        alt="You-Pod Logo"*/}
                {/*        width={200}*/}
                {/*        height={37}*/}
                {/*        priority*/}
                {/*    />*/}
                {/*</div>*/}

                <div className={styles.thirteen}>
                    <Image
                        src="/you-pod-logo.svg"
                        alt="Logo"
                        width={130}
                        height={36}
                        priority
                    />
                    <Link href={'/podcast'}>Link to podcast</Link>
                </div>
            </div>
            <footer>
                <SmallWithNavigation/>
            </footer>
        </>
    )
}
