"use client";

import NavButton from "./NavButton"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; //automatically updates the active page when the user navigates to a new page

type NavBarProps = {
  isLoggedIn: boolean;
  userName?: string;
};

//This is the NavBar component, which is a functional component that takes in props of type NavBarProps
export default function NavBar({ isLoggedIn, userName}: NavBarProps) {

    const pathname = usePathname();
  return (

    // removed tailwind rounded 8px so no white is showing on corners
    <nav className="flex w-full flex-col items-center justify-between gap-2 bg-[#664930] px-3 py-2 text-white sm:h-[80px] sm:flex-row sm:justify-between sm:gap-0 sm:p-1"> 
        {/*Values for height and hex pulled from figma */}

        <div className="relative h-[64px] aspect-square shrink-0 sm:ml-10 sm:h-full">
            <Link href="/" className="relative block h-full w-full">
                <Image 
                src="/images/website_logo.png"
                alt="Logo" 
                fill
                sizes="80px"
                className="object-contain"
                />
            </Link>
        </div>
    {/* Holds JS buttom components, see Fimga button components for CSS and behaviour*/}
        <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:mr-10 sm:w-auto sm:justify-end sm:gap-4">
            {/*Always shows discussion on navbar regardless of login*/}
            <Link href="/discussion">
                <div className={pathname === "/discussion" ? "border-b-2 border-white pb-1" : "opacity-80"}>
                    <NavButton text="Discussion"/>
                </div>
            </Link>
            
            {isLoggedIn ? (
                <>
                <Link href="/mypost">
                    <div className={pathname === "/mypost" ? "border-b-2 border-white pb-1" : "opacity-80"}>
                        <NavButton text="My Posts"/>
                    </div>

                </Link>
                <Link href="/">
                    
                    <NavButton text={`${userName}: Log Out`} onClick={() => {localStorage.setItem("isLoggedIn", "false"); localStorage.removeItem("username"); if (pathname === "/") location.reload();}}/>
                  

                </Link>
                    
                </>
            ) : (
                <Link href="/signup">
                    <div className={pathname === "/signup" ? "border-b-2 border-white pb-1" : "opacity-80"}>
                        <NavButton text="Sign Up / Sign In"/>
                    </div>
                    
                </Link>
            )}
        </div>
    </nav>


  );
}