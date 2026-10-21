import NavBar from "../components/NavBar";

export default function MyPostsPage() {
    return (
        <>
        <div className="min-h-screen pb-24 w-full bg-[#F3EAD6] overflow-x-hidden">
            {/* navbar and title for the page.*/ }
                <NavBar isLoggedIn={true} userName={"Ghost100"}/>

                {/*title heading */}
                <div className="max-w-300 mx-auto px-6 flex flex-col items-center justify-center mt-[5%] gap-12">
                    <h1 className="text-4xl font-bold text-center text-[#664930]">My Posts</h1>
                </div>
        </div>
        </>
    )
}