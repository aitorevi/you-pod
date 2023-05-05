import {useSession, signIn, signOut} from "next-auth/react";
import {Button} from "@chakra-ui/react";

const index = () => {

        return (
            <div>
                <p>Welcome</p>
                <Button onClick={() => signOut()}>Sign out</Button>
            </div>
        )

        return (
            <div>
                <p>You are not signed in</p>
                <Button onClick={() => signIn()}>Sign in</Button>
            </div>
        )
}
export default index