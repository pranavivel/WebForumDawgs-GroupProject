import Link from "next/link";
import NavBar from "../components/NavBar";

/*
    This is the create page where users create a new post
*/
export default function Create() {
    return (
        <>
            <NavBar isLoggedIn={true} userName="temp"/>

            <div className="min-h-screen w-full bg-[#F3EAD6] ">
                <h1 className="text-4xl font-bold text-center mt-[5%] text-[#664930]">Create Post</h1>

                <div className="grid grid-columns-1 items-center justify-center mt-[2%] text-2xl text-[#664930]">

                    <label className="grow mb-1" htmlFor="titleInput">Title:</label>
                    <input className="bg-white border-10 rounded-xl border-white shadow-lg mb-5" name="titleInput" type="text" id="title"/>

                    <label className="grow mb-1" htmlFor="descriptionInput">Description:</label>
                    <textarea className="bg-white border-10 rounded-xl border-white shadow-lg h-60 mb-5" name="descriptionInput" id="description"/>

                    <label className="grow">Post Tag:</label>
                    <div className="flex" id="postTagSelect">
                        <button className="NavButton whitespace-pre-line bg-[#5c4837] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] h-10">
                            Course Discussion
                        </button>
                        <button className="NavButton whitespace-pre-line bg-[#667f83] text-white font-bold rounded-[15px] hover:bg-[#466064] active:bg-[#324f53] h-10">
                            Student Mini-Courses
                        </button>
                        <button className="NavButton whitespace-pre-line bg-[#ccaa93] text-white font-bold rounded-[15px] hover:bg-[#ad886e] active:bg-[#945951] h-10">
                            Resources
                        </button>
                    </div>

                    <label className="grow">Course Tag:</label>
                    <div className="flex" id="postTagSelect">
                        <button className="NavButton whitespace-pre-line bg-[#5c4837] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] h-10">
                            STEM
                        </button>
                        <button className="NavButton whitespace-pre-line bg-[#667f83] text-white font-bold rounded-[15px] hover:bg-[#466064] active:bg-[#324f53] h-10">
                            Business
                        </button>
                        <button className="NavButton whitespace-pre-line bg-[#ccaa93] text-white font-bold rounded-[15px] hover:bg-[#ad886e] active:bg-[#945951] h-10">
                            Humanities & Arts
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <Link className="text-center" href="/discussion">
                            <button className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-30 h-10">
                                Cancel
                            </button>
                        </Link>
                        <Link className="text-center" href="/discussion">
                            <button className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-30 h-10">
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}