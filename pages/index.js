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
            <div className="flex justify-center items-center flex-col">
                <h2 className="p-4 text-center text-2xl font-semibold">
                    Things I learned while building this app
                </h2>
                <p className="p-4 sm:container text-left justify-center">
                    At the time of starting this test/assessment, I had never used next.js, tailwindcss, or vercel. It had also been quite a while since I used react and firebase. Needless to say, I had a lot of catching up to do, but was very excited for the oppurtunity to play around with some new tools and libraries. The main requirements for this app were: to create a landing page using Next.js (which is a frameork built on React). The landing page would need to be connected to Firebase for authorization, and styled using Tailwind.css and finally it should be deployed using Vercel. </p>
                <p className="p-4 sm:container text-left justify-center">
                    The first challenge was to initialize the project with the correct packages. Luckily, there was great documentation online. I initially used <span className="font-semibold">npx create-next-app</span> along with a tailwind package called <span className="font-semibold">--example with-tailwindcss</span>. From there, I headed to firebase and followed documentation online to create a project, configure my firebase credentials with my web app, then set up Google authentification. This step was surprisingly problematic because many resources online used outdated methods. Specifically, they would initialize firebase to an object and access properties on it such as <span className="font-semibold">firebase.apps.length.</span> This would repeatedly cause an error because the new way to initialize firebase, is by using functions such as: <span className="font-semibold">const app = initializeApp(firebaseConfig).</span>
                </p>
                <p className="p-4 sm:container text-left justify-center">
                    Finally, the last two things left to do were to style my app using Tailwind and deploy using Vercel. Using Tailwind was a matter of getting accustomed to utility class based styling. I read through  documentation and looked at common patterns for styling text, headers, etc. Another obstacle was incorporating Github into my project. I intiailly cloned the repo from Codebusters @ <span className="font-semibold">https://github.com/codebusters-ca/pras_test</span>, but every time I tried to push the changes to the remote repo, I would get permission errors. Luckily, I kept the habit of pushing commits to my local branch. Eventually, I decided to create a <span className="font-semibold">pras_test repo on my own github </span>, and changed the remote repo url from <span className="font-semibold">codebusters-ca to prasc</span>. From here, I was able to push all my local commits to my repo without any problems. 
                </p>
                <p className="p-4 sm:container text-left justify-center">
                    Once it came time to deploy to Vercel, I ran into three errors. The first error was an authorization error that I resolved by approving the <span className="font-semibold">https://pras-test.vercel.app/</span> domain in my project settings on firebase. Next, the issue was Vercel was unable to find my firebase credentials. This was because I opted to use a <span className="font-semibold">.env.local file</span> for security purposes, and ofcourse this doesn't get pushed to your remote github repo, so Vercel had no idea what my credentials were. This was resolved by manually adding them in my project settings on Vercel. Once this issue was resolved, the final issue was Vercel being unable to build my project, leading to a 404 error. Apparently, this is a common issue and was resolved by going into my settings and manully telling Vercel that this was a next.js app. Finally, I was able to have the page running successfully and wrote this little write-up to document the process! <span className="italic"> Thank you for the learning oppurtunity Thom, looking forward to working with you more in the future. </span>
                </p>
                
            </div>

        </div>
    )
}

export default SignInScreen;