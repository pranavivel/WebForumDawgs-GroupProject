import NavBar from "../components/NavBar";

type DiscussionProps = {
  isLoggedIn: boolean;
  userName?: string;
};

/* Page for discussion page. This is the where the user can see course discussions*/
export default function DiscussionPage({ isLoggedIn, userName }: DiscussionProps) {
    const testingREMOVEloggedIn = true;
    return (
        <>
            <div className="min-h-screen w-full bg-[#F3EAD6]">
                
                <NavBar isLoggedIn={testingREMOVEloggedIn} userName={"IDK :("} activePage="Discussion"/>

                <div className="flex flex-col items-center justify-center mt-[5%] gap-24">
                    <h1 className="text-4xl font-bold text-center text-[#664930]">Discussion</h1>
                </div>
            </div>

        </>
    )
}