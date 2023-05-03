import {useSession, signIn, signOut} from "next-auth/react";
import {Button} from "@chakra-ui/react";

const index = () => {
    const {data: session} = useSession()
    if (session) {
        return (
            <div>
                <p>Welcome, {session.user?.name}</p>
                <Button onClick={() => signOut()}>Sign out</Button>
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not signed in</p>
                <Button onClick={() => signIn()}>Sign in</Button>
            </div>
        )
    }
}
export default index