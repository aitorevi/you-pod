import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
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
        async jwt({token, account, user}) {
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
        async session({session, token, user}) {
            session.accessToken = token.accessToken;
            session.user = token.user;
            return session
        }
    }
});