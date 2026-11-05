"use client"


import { useRouter } from "next/navigation"
import NavBar from "../components/NavBar";
import AuthInputField from "../components/AuthInputField";
import Link from "next/link";

import { useEffect, useState } from "react";
// import NavButton from "../components/NavButton";
// import Link from "next/dist/client/link";



/*
    This is the sign in page where the user logs into their account
*/
export default function SignIn() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");




    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "true") {
            router.push("/");
        }
    }, []);



    const handleSignIn = async () => {
        if (isSubmitting) return;

        setError("");

        if (!username.trim() || !password) {
            setError("Please enter your username and password.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username.trim(),
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error(
                    `Could not sign in (${response.status}).`
                );
            }

            const data = await response.json();

            if (
                typeof data?.username !== "string" ||
                !data.username.trim()
            ) {
                throw new Error("The API returned an invalid username.");
            }

            // These values control the UI; server authentication is separate.
            localStorage.setItem("username", data.username);
            localStorage.setItem("isLoggedIn", "true");
            router.push("/discussion");
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };


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

                    <AuthInputField setFunction={setUsername} type="text" inputLabel="Username" onChange={setUsername}/>
                    <AuthInputField setFunction={setPassword} type="password" inputLabel="Password" showPassword={true} onChange={setPassword}/>
                    {error && <p role="alert">{error}</p>}


                    <button
                        type="button"
                        disabled={isSubmitting}
                        className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-50 h-10"
                        onClick={handleSignIn}
                    >
                        {isSubmitting ? "Signing In..." : "Sign In"}
                    </button>
                </div>
            </div>
        </>
    )
}