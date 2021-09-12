import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "../firebase/clientApp";
import 'tailwindcss/tailwind.css';


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
        <div className="bg-blue-100 p-8">
           {userName === "" &&  
           <div className="flex gap-8 items-center justify-center">
                <h1 className={"text-xl"} >Google Login</h1> 
                <button onClick={onClick} className="bg-blue-200 p-4 rounded-xl hover:bg-blue-300 border-blue-900 shadow-lg border-b-2"> Sign in with Google</button>
           </div>}
           {userName !== "" && <p className="text-center text-2xl border-b-8 border-blue-900">Hello <span className="font-bold">{userName}</span></p>}
           <p className="p-4">"Hello world"</p>

        </div>
    )
}

export default SignInScreen;