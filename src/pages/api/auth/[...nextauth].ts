import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";

type Credentials = Record<"name" | "email" | "password", string> | undefined
export default NextAuth({
    adapter: FirestoreAdapter({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY !== undefined
                ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
                : '',
        }),
    }),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                console.log({ credentials })
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })

        // Credentials({ // TODO: Implementar las credenciales personalizadas
        //     name: 'Custom Login',
        //     credentials: {
        //         email: {label: 'Correo', type: 'email', placeholder: 'correo@tucorreo.com'},
        //         password: {label: 'Contraseña', type: 'password', placeholder: 'Contraseña'}
        //     },
        //     async authorize(credentials) {
        //         console.log({credentials})
        //         // TODO: validar contra base de datos
        //         return {name: 'juanito', email: 'juanito@a.com', role: 'admin'};
        //     }
        // })

    ],
    secret: process.env.JWT_SECRET,

    // Custom pages
    pages: {
        signIn: "/auth/signin",
    },

    jwt: {

    },

    session: {
        maxAge: 2592000,
        strategy: "jwt",
        updateAge: 86400,
    },

    // Callbacks
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token
                switch (account.type) {
                    case 'oauth':
                        // TODO: crear usuario o verificar si existe en mi DB
                        break
                    case 'credentials':
                        token.user = user
                        break
                }
            }
            return token
        },
        async session({ session, token, user }) {
            return session
        }
    }
});