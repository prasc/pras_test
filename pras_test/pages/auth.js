import React from "react";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import firebase from "../firebase/clientApp";

const provider = new GoogleAuthProvider();

const auth = getAuth();
const googleSignIn = signInWithRedirect(auth, provider);

function SignInScreen() {
    return (
        <div 
        style={{
            maxWidth: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
           <h1>Google Login</h1> 
        </div>
    )
}

export default SignInScreen;