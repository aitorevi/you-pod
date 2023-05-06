import React from "react";
import NewsletterForm from "../../components/newsletter_suscribe";
import {useSession} from "next-auth/react";
import Layout from "@/components/layout";

export default function Newsletter() {
    const {status} = useSession({required: true})
    if (status === 'authenticated') {
        return (
            <>
                <Layout props={''}>
                    <NewsletterForm/>
                </Layout>
            </>
        )
    }
}