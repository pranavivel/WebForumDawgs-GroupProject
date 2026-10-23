"use client"

import { useState, useEffect } from "react";

import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Pill from "../components/Pill";
import DropDown from "../components/DropDown";
import NavButton from "../components/NavButton";
import {tempPosts} from "../tempData/cards";
import Image from "next/image";
import Link from "next/link";


// Props here
type DiscussionProps = {
//   isLoggedIn: boolean;
  userName?: string;
};



/* Page for discussion page. This is the where the user can see course discussions*/
export default function DiscussionPage({ /*isLoggedIn,*/ userName }: DiscussionProps) {
    const testingREMOVEloggedIn = true;
    // isLoggedIn = testingREMOVEloggedIn

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
            <div className="min-h-screen pb-24 w-full bg-[#F3EAD6] overflow-x-hidden">

                {/*Basic navbar and title for the page.*/ }
                <NavBar isLoggedIn={isLoggedIn} userName={"Ghost100"}/>

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
                        <DropDown dropOption="post"/>
                        {
                            isLoggedIn ? (
                                <Link href="/create">
                                    <NavButton text="+ Create Post"/>
                                </Link>
                            ) : (
                                ''
                            )
                        }

                    </div>
                    


                    {/*Cards*/}
                    <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
                        {
                            tempPosts.map((card) => {
                                return (
                                    <Card
                                    key={card.id}
                                    isLoggedIn={isLoggedIn}
                                    postAuthor={card.author}
                                    title={card.title}
                                    time={card.time}
                                    content={card.content}
                                    postTag={card.postTag}
                                    courseTag={card.courseTag}
                                    likes={card.likes}
                                    rating={card.rating}/>
                                )
                                
                            })
                        }

                        
                    </div>
                    
                   
                </div>
            </div>

        </>
    )
}