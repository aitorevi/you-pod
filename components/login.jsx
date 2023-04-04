import React from "react";
import {useSession, signIn, signOut} from "next-auth/react";

const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data: session} = useSession()

    if (session) {
        return (<div>
                    <p>Welcome, {session.user.email}</p>
            <img src={session.user.image} alt="" style={{borderRadius: '50px'}}/>
                    <button onClick={()=> signOut()}>Sign out</button>
                </div>)
    } else {
        return (
            <div>
                <p>No estas logueado</p>
                <button onClick={()=> signIn()}>Sign in</button>
            </div>
        )
    }
}

export default login