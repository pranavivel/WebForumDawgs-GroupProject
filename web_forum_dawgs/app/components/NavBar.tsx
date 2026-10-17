import NavButton from "./NavButton"
import Image from "next/image";

type NavBarProps = {
  isLoggedIn: boolean;
  userName: string;
};

//This is the NavBar component, which is a functional component that takes in props of type NavBarProps
export default function NavBar({ isLoggedIn, userName }: NavBarProps) {
  return (

    <nav className="flex w-full flex-row h-[80px] justify-between items-center p-1 bg-[#664930] text-white rounded-b-[8px]">
        {/*Values for height and hex pulled from figma */}

        <div className=" relative h-[100%] aspect-square ml-10">
            <Image 
            src="/images/website_logo.png"
            alt="Logo" 
            fill
            sizes="80px"
            className="object-contain"
            />
        </div>
    {/* Holds JS buttom components, see Fimga button compnents for CSS and behaviour*/}
        <div className="flex flex-row gap-4 mr-10">
            {/*Always shows discussion on navbar regardless of login*/}
            <NavButton text="Discussion"/>
            {isLoggedIn ? (
                <>
                    <NavButton text="My Posts"/>
                    <NavButton text={`${userName}: Log Out`}/>
                </>
            ) : (
                <NavButton text="Sign Up / Sign In"/>
            )}
        </div>
    </nav>



  );
}