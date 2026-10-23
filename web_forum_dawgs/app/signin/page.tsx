"use client"

import { useRouter } from "next/navigation"
import NavBar from "../components/NavBar";
import AuthInputField from "../components/AuthInputField";
// import NavButton from "../components/NavButton";
// import Link from "next/dist/client/link";

/*
    This is the sign in page where the user logs into their  account
*/
export default function SignIn() {
    const router = useRouter();

    return (
        <>
            <NavBar isLoggedIn={false}/>

            <div className="min-h-screen w-full bg-[#F3EAD6] ">
                <h1 className="text-4xl font-bold text-center mt-[5%] text-[#664930]">Sign In</h1>
                <p className="text-[#664930]  font-bold text-center mt-[1%]"> Need a Forum Dawgs account? <a href="/signup" className="text-[#A65D4E] underline">Create an Account</a></p>
            

                <div className="flex flex-col items-center justify-center mt-[5%] gap-24">
                    <AuthInputField type="text" inputLabel="Username" />
                    <AuthInputField type="password" inputLabel="Password" showPassword={true} />
                    <button className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-50 h-10" onClick={() => {localStorage.setItem("isLoggedIn", "true"); router.push("/discussion")}}>
                        Sign In
                    </button>
                </div>

            </div>
        </>
    )
}