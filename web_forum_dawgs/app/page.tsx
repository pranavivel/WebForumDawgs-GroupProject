"use client"

import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", "false");
    }
    if (localStorage.getItem("isLoggedIn") === "false") {
        setIsLoggedIn(false);
    } else {
        setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} userName={"Ghost100"}/>

      
      <div className="SplashImage min-h-screen w-full">
        <div>
          <p className="SplashText">
          Welcome to the Forum Dawgs!</p>

          <p className="SplashText">
            A place to discuss your favorite topics with other like-minded individuals.
          </p>
          <hr className="border-0.01 white mt-18 w-150 mx-auto" />
        </div>
      </div>
  </>
  );
}
