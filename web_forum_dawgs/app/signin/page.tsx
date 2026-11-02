"use client"

import { useRouter } from "next/navigation"
import NavBar from "../components/NavBar";
import AuthInputField from "../components/AuthInputField";
import Link from "next/link";
import { useEffect, useState } from "react";
// import NavButton from "../components/NavButton";
// import Link from "next/dist/client/link";

/*
    This is the sign in page where the user logs into their  account
*/
export default function SignIn() {
    const router = useRouter();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "true") {
            router.push("/");
        }
    }, []);

    const handleSignin = () => {
        // should call api/signin to handle sign in, and if successful set  isLoggedIn, username, and auth token
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        router.push("/discussion");
    }

    return (
        <>
            <NavBar isLoggedIn={false}/>

            <div className="min-h-screen w-full bg-[#F3EAD6] max-sm:px-[10px] max-sm:pb-8">
                <h1 className="text-4xl font-bold text-center mt-[5%] text-[#664930]">Sign In</h1>
                <p className="mt-[1%] text-center font-bold text-[#664930] max-sm:px-[10px] max-sm:leading-6"> Need a Forum Dawgs account? <Link
                        href="/signup"
                        className="text-[#A65D4E] underline max-sm:inline-block"
                    >
                        Create an Account
                    </Link>Create an Account</p>
            

                <div className="mt-4 flex flex-col items-center justify-center gap-5 sm:mt-[5%] sm:gap-24">
                    <AuthInputField setFunction={setUsername} type="text" inputLabel="Username" />
                    <AuthInputField setFunction={setPassword} type="password" inputLabel="Password" showPassword={true} />
                    <div className="text-red-400">
                        {error}
                    </div>
                    <button className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-50 h-10" onClick={handleSignin}>
                        Sign In
                    </button>
                </div>

            </div>
        </>
    )
}