"use client"

import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import connectMongoDB from "../config/mongodb";

export default function Home() {
  // Mongoose connection 
  //connectMongoDB();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("user");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", "false");
    }
    if (localStorage.getItem("isLoggedIn") === "false") {
        setIsLoggedIn(false);
    } else {
        setIsLoggedIn(true);
    }
    let grabbedUserName = localStorage.getItem("username");
    if (grabbedUserName !== null) setUserName(grabbedUserName);
  }, []);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} userName={userName}/>
      
      <div className="SplashImage min-h-screen w-full max-sm:px-4">
        <div className="max-sm:mx-auto max-sm:w-full max-sm:max-w-[360px] max-sm:min-w-0">

          <p className="SplashText max-sm:!w-full max-sm:!max-w-full max-sm:!whitespace-normal max-sm:break-words max-sm:!text-center max-sm:!text-[26px] max-sm:!leading-tight">
            Welcome to the Forum Dawgs!
          </p>

          <p className="SplashText max-sm:!w-full max-sm:!max-w-full max-sm:!whitespace-normal max-sm:break-words max-sm:!text-center max-sm:!text-[18px] max-sm:!leading-relaxed">
            A place to discuss your favorite topics with other like-minded individuals.
          </p>

          <hr className="border-0.01 white mt-18 w-150 mx-auto max-sm:mt-8 max-sm:w-full max-sm:max-w-[280px]" />

        </div>
      </div>
    </>
  );
}
