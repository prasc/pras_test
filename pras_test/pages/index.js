import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "../firebase/clientApp";

const provider = new GoogleAuthProvider();


function SignInScreen() {
    const auth = getAuth();
    const [userName, setUserName] = useState("")

    const onClick = async() => {
        console.log("hey1")
        

        const result = await signInWithPopup(auth, provider)
        if (result) {
            const user = result.user.displayName
            console.log(user)
            setUserName(user)
        }
        console.log("hey2")

    }
    return (
        <div>
           {userName === "" &&  
           <div>
                <h1>Google Login</h1> 
                <button onClick={onClick}> Sign in with Google</button>
           </div>}
           {userName !== "" && <p>Hello {userName}</p>}
        </div>
    )
}

export default SignInScreen;