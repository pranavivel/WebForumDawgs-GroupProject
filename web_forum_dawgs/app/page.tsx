
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar isLoggedIn={true} userName={"temp"}/>

      
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
