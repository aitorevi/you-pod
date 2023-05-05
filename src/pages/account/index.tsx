// import React from "react";
// import {useSession, signOut, signIn, getSession} from "next-auth/react";
// import {Button} from "@chakra-ui/react";
//
// const useAccount = () => {
//     const {data: session, status} = useSession()
//     if (status === 'authenticated') {
//         return (
//             <div>
//                 <p>Welcome {session?.user?.name}</p>
//                 <Button onClick={() => signOut()}>Sign Out</Button>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <p>You are not signed in</p>
//                 <Button onClick={() => signIn()}>Sign In</Button>
//             </div>
//         )
//     }
// }
