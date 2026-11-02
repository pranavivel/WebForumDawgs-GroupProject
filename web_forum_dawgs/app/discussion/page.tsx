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


/* Page for discussion page. This is the where the user can see course discussions*/
export default function DiscussionPage() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("user");
    const [posts, setPosts] = useState();

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
            <div className="min-h-screen pb-24 w-full bg-[#F3EAD6] overflow-x-hidden">

                {/*Basic navbar and title for the page.*/ }
                <NavBar isLoggedIn={isLoggedIn} userName={userName}/>

                {/*title heading */}
                <div className="mx-auto mt-6 flex w-full max-w-[1200px] flex-col items-center justify-center gap-6 px-4 sm:mt-[5%] sm:gap-12 sm:px-6">
                    <h1 className="text-center text-3xl font-bold text-[#664930] sm:text-4xl">Discussion</h1>
                    {/*SEarch bar*/}
                    <div className="relative w-full max-w-[600px]">
                        <div className="absolute left-4 top-1/2 z-10 h-6 w-6 -translate-y-1/2 sm:left-6">
                            <Image
                                src="/icons/search.svg"
                                alt="search"
                                fill 
                                className="object-contain"
                                />
                        </div>
                        <input
                            type="text"
                            
                            className="h-[50px] w-full rounded-[50px] bg-[#CCBEB1] pl-12 pr-4 text-[#664930] shadow-inner outline-2 outline-[#664930] focus:outline-none sm:h-[70px] sm:pl-16 sm:pr-6">
                        </input>
                    </div>

                    {/*search tags*/}
                    <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-12">
                        <Pill title="All" textColor="text-[#FFFFFF]" pillColor="bg-[#997E67]" width="w-[120px]" height="h-[30px]" />
                        <Pill title="STEM" textColor="text-[#FFFFFF]" pillColor="bg-[#997E67]" width="w-[120px]" height="h-[30px]" />
                        <Pill title="Business" textColor="text-[#FFFFFF]" pillColor="bg-[#997E67]" width="w-[120px]" height="h-[30px]" />
                        <Pill title="Humanities & Arts" textColor="text-[#FFFFFF]" pillColor="bg-[#997E67]" width="w-[120px]" height="h-[30px]" />
                    </div>
                    
                    <hr className="h-[3px] w-1/2 border-none bg-[#664930] sm:w-[30%]"/>

                    {/*Drop down and create post button*/}
                    <div className="flex w-full flex-wrap items-center justify-center gap-4 sm:gap-20">
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
                    <div className="mt-2 grid w-full min-w-0 grid-cols-1 justify-items-center gap-6 sm:mt-6 sm:gap-16 md:grid-cols-2 lg:grid-cols-3">
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