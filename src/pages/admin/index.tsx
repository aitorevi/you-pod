import React from "react";
import {useSession} from "next-auth/react";
import Podcast from "@/components/admin_render";

export default function PodcastRender() {
    const {status} = useSession({required: true})
    if (status === 'authenticated') {
        return (
            <>
                <Podcast/>
            </>
        )
    }
}