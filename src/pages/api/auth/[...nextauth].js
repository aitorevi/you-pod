import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

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
        Credentials({
            name: 'Custom Login',
            credentials: {
                email: {label: 'Correo', type:'email', placeholder:'correo@tucorreo.com'},
                password: {label: 'Contraseña', type:'password', placeholder:'Contraseña'}
            },
            async authorize(credentials) {
                console.log({credentials})
                // TODO: validar contra base de datos
                return {name: 'juanito', email: 'juanito@a.com', role: 'admin'};
            }
        })

    ],
    // secret: process.env.JWT_SECRET,   Deprecated

    // Callbacks
    callbacks: {
        async jwt({token, account, user}) {
            console.log({token, account, user})
            return  token
        },
        async session({session, token, user}) {
            console.log({session, token, user})
            return session
        }
    }

    // Si dejo esto sin comentar, cuando hago signOut me redirige correctamente a la pagina sigin
    // pages: {
    //     signIn: "/auth/signin",
    // },
    // si lo dejo sin comentar cuando intento loguearme no puedo, me redirige a signin todo el rato

    // si lo comento, cuando hago signOut me redirige a una pagina de google para que me loguee

});