"use client"

import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import NavButton from "../components/NavButton";
import Link from "next/link";

import Card from "../components/Card";

import {tempPosts} from "../tempData/cards";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function MyPostsPage() {
    const router = useRouter();

    if (localStorage.getItem("isLoggedIn") !== "true") {
        router.push("/");
    }

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
            {/* navbar and title for the page.*/ }
                <NavBar isLoggedIn={true} userName={"Ghost100"}/>

                {/*title heading */}
                <div className="max-w-300 mx-auto px-6 flex flex-col items-center justify-center mt-[5%] gap-12">
                    <h1 className="text-4xl font-bold text-center text-[#664930]">My Posts</h1>
                </div>

                {/*Cards*/}
                <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
                    {
                        tempPosts.map((card) => {
                            return (
                                <Card
                                key={card.id}
                                isLoggedIn={isLoggedIn}
                                isMyPost={true}
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

                 {/*Drop down and create post button*/}
                    <div className="fixed bottom-8 right-8">
                        {
                            isLoggedIn ? (
                                <Link href="/create">
                                    <NavButton text="+" rounded="rounded-[100px]"/>
                                </Link>
                            ) : (
                                ''
                            )
                        }

                    </div>
        </div>
        </>
    )
}