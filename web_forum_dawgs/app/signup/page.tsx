"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthInputField from "../components/AuthInputField";
import NavBar from "../components/NavBar";

/*
    This is the signup page where the user creates an account
*/
export default function SignUp() {
    const router = useRouter();
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
                    <AuthInputField type="text" inputLabel="Email" />
                    <AuthInputField type="text" inputLabel="Username" />
                    <AuthInputField type="password" inputLabel="Password" showPassword={true} />
                    <button className="NavButton h-10 w-50 whitespace-pre-line rounded-[15px] bg-[#997E67] font-bold text-white hover:bg-[#854638] active:bg-[#693626]" onClick={() => {localStorage.setItem("isLoggedIn", "true"); router.push("/discussion")}}>
                        Sign Up
                    </button>
                </div>

            </div>

        </>
    )
}