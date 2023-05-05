import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import * as process from "process"

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    secret: process.env.JWT_SECRET,

    // Si dejo esto sin comentar, cuando hago signOut me redirige correctamente a la pagina sigin
    pages: {
        signIn: "/auth/signin",
    },
    // si lo dejo sin comentar cuando intento loguearme no puedo, me redirige a signin todo el rato

    // si lo comento, cuando hago signOut me redirige a una pagina de google para que me loguee

});