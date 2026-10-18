import Link from "next/link";
import AuthInputField from "../components/AuthInputField";
import NavBar from "../components/NavBar";

/*
    This is the signup page where the user creates an account
*/
export default function SignUp() {
    return (
        <>
            <NavBar isLoggedIn={false} activePage="Sign Up / Sign In"/>

            <div className="min-h-screen w-full bg-[#F3EAD6] ">
                <h1 className="text-4xl font-bold text-center mt-[5%] text-[#664930]">Sign Up</h1>
                <p className="text-[#664930]  font-bold text-center mt-[1%]"> Already have a Forum Dawgs account? <a href="/signin" className="text-[#A65D4E] underline">Sign In</a></p>
            

                <div className="flex flex-col items-center justify-center mt-[5%] gap-24">
                    <AuthInputField type="text" inputLabel="Email" />
                    <AuthInputField type="text" inputLabel="Username" />
                    <AuthInputField type="password" inputLabel="Password" showPassword={true} />
                    <Link href="/discussion">
                        <button className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-50 h-10">
                            Sign Up
                        </button>
                    </Link>
                </div>

            </div>

        </>
    )
}