import React from "react";
import Podcast_render from "@/components/podcast_render";
import {useSession} from "next-auth/react";
import Layout from "@/components/layout";

export default function Podcast() {
    const {status} = useSession({required: true})
    if (status === 'authenticated') {
        return (
            <>
                <Layout props={''}>
                    <Podcast_render/>
                </Layout>
            </>
        )
    }
}
