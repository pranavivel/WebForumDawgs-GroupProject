"use client"


import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthInputField from "../components/AuthInputField";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

/*
    This is the signup page where the user creates an account
*/
export default function SignUp() {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string>("");

    /* login setter*/
    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "true") {
            router.push("/");
        }
    }, []);

    const handleSignup = () => {
        
    }

    const handleSignUp = async () => {
        if (isSubmitting) return;

        setError("");

        if (!email.trim() || !username.trim() || !password) {
            setError("Please enter your email, username, and password.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.trim(),
                    username: username.trim(),
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error(
                    `Could not sign up (${response.status}).`
                );
            }

            const data = await response.json();

            if (
                typeof data?.username !== "string" ||
                !data.username.trim()
            ) {
                throw new Error("The API returned an invalid username.");
            }

            // should call api/signup to handle sign up, and if successful set  isLoggedIn, username, and auth token

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

            <div className="min-h-screen w-full bg-[#F3EAD6]  max-sm:px-[10px] max-sm:pb-8">
                <h1 className="text-4xl font-bold text-center mt-[5%] text-[#664930]">Sign Up</h1>
                <p className="mt-[1%] text-center font-bold text-[#664930] max-sm:px-[10px] max-sm:leading-6"> Already have a Forum Dawgs account? <Link
                        href="/signin"
                        className="text-[#A65D4E] underline max-sm:inline-block"
                    >
                        Sign In
                    </Link></p>
            

                <div className="mt-4 flex flex-col items-center justify-center gap-5 sm:mt-[5%] sm:gap-24">

                    
                    <AuthInputField type="email" inputLabel="Email" onChange={setEmail} setFunction={setEmail}/>
                    <AuthInputField type="text" inputLabel="Username" onChange={setUsername} setFunction={setUsername}/>
                    <AuthInputField type="password" inputLabel="Password" showPassword={true} onChange={setPassword} setFunction={setPassword}/>

                    {error && <p role="alert">{error}</p>}

                    <button className="NavButton h-10 w-50 whitespace-pre-line rounded-[15px] bg-[#997E67] font-bold text-white hover:bg-[#854638] active:bg-[#693626]" 
                    disabled={isSubmitting} 
                    onClick={handleSignUp}>
                        {isSubmitting ? "Signing Up..." : "Sign Up"}

                    </button>
                </div>

            </div>

        </>
    )
}