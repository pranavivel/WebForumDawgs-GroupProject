

import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Pill from "../components/Pill";
import DropDown from "../components/DropDown";
import NavButton from "../components/NavButton";
import Image from "next/image";
import Link from "next/link";

type DiscussionProps = {
  isLoggedIn: boolean;
  userName?: string;
};

/* Page for discussion page. This is the where the user can see course discussions*/
export default function DiscussionPage({ isLoggedIn, userName }: DiscussionProps) {
    const testingREMOVEloggedIn = true;
    return (
        <>
            <div className="min-h-screen pb-24 w-full bg-[#F3EAD6] overflow-x-hidden">

                {/*Basic navbar and title for the page.*/ }
                <NavBar isLoggedIn={testingREMOVEloggedIn} userName={"temp"}/>

                {/*title heading */}
                <div className="max-w-300 mx-auto px-6 flex flex-col items-center justify-center mt-[5%] gap-12">
                    <h1 className="text-4xl font-bold text-center text-[#664930]">Discussion</h1>
                    {/*SEarch bar*/}
                    <div className="relative w-full max-w-[600px]">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6  z-10">
                            <Image
                                src="/icons/search.svg"
                                alt="search"
                                fill 
                                className="object-contain"
                                />
                        </div>
                        <input
                            type="text"
                            
                            className="w-full h-[70px] bg-[#CCBEB1] rounded-[50px] pl-16 pr-6 text-[#664930] outline-[#664930] outline-2 focus:outline-none shadow-inner">
                        </input>
                    </div>

                    {/*search tags*/}
                    <div className="flex flex-row gap-12">
                        <Pill title="All" textColor="text-[#FFFFFF]" pillColor="bg-[#997E67]" width="w-[120px]" height="h-[30px]" />
                        <Pill title="STEM" textColor="text-[#FFFFFF]" pillColor="bg-[#997E67]" width="w-[120px]" height="h-[30px]" />
                        <Pill title="Business" textColor="text-[#FFFFFF]" pillColor="bg-[#997E67]" width="w-[120px]" height="h-[30px]" />
                        <Pill title="Humanities & Arts" textColor="text-[#FFFFFF]" pillColor="bg-[#997E67]" width="w-[120px]" height="h-[30px]" />
                    </div>
                    
                    <hr className="bg-[#664930] border-none, h-[3px] w-[30%]"/>

                    {/*Drop down and create post button*/}
                    <div className="flex flex-row gap-20 justify-center items-center">
                        <DropDown/>
                        <Link href="/create">
                            <NavButton text="+ Create Post"/>
                        </Link>
                    </div>
                    


                    {/*Cards*/}
                    <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">

                        <Card 
                        isLoggedIn={testingREMOVEloggedIn}
                        postAuthor={"dawg123"}
                        title={"CSCI 4300"}
                        time={"2 hours ago"}
                        content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in."}
                        postTag={"Course Discussion"}
                        courseTag={"Humanities & Arts"}
                        likes={10}
                        rating={0}
                    />
                        <Card 
                        isLoggedIn={testingREMOVEloggedIn}
                        postAuthor={"dawg123"}
                        title={"CSCI 4300"}
                        time={"2 hours ago"}
                        content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in."}
                        postTag={"Course Discussion"}
                        courseTag={"Humanities & Arts"}
                        likes={10}
                        rating={2}
                    />
                        <Card 
                        isLoggedIn={testingREMOVEloggedIn}
                        postAuthor={"dawg123"}
                        title={"CSCI 4300"}
                        time={"2 hours ago"}
                        content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in."}
                        postTag={"Course Discussion"}
                        courseTag={"Humanities & Arts"}
                        likes={10}
                        rating={5}
                    />
                    </div>
                    
                   
                </div>
            </div>

        </>
    )
}