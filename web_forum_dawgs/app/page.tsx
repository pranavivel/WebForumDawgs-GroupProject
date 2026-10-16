import Image from "next/image";
import NavButton from "./components/NavButton";

export default function Home() {
  return (
    <>
   <nav className="flex w-full flex-row h-[80px] justify-between items-center p-4 bg-[#664930] text-white">
     {/*Values for height and hex pulled from figma */}

      <div className=" relative h-[100%] aspect-square">
        <Image 
          src="/images/placeholder.png"
          alt="Logo" 
          fill
          sizes="80px"
          className="object-contain"
          />
      </div>
{/* Holds JS buttom components, see Fimga button compnents for CSS and behaviour*/}
    <div>
      <NavButton text="Discussion"/>
      <NavButton text="Sign Up / Sign In"/>
    </div>
  </nav>

  <div className="SplashImage min-h-screen w-full ">
    <p className="SplashText">
      Welcome to the Forum Dawgs!
      <br />
      A place to discuss your favorite topics with other like-minded individuals.
      
      
      </p>

  </div>
  </>
  );
}
