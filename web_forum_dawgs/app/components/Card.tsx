'use client';

import Pill from "./Pill";
import Image from "next/image";
import Link from "next/link";

import {useState} from 'react';

type CardProps = {
    isLoggedIn: boolean;
    postAuthor: string;
    title: string;
    time: string;
    content: string;
    postTag: string;
    courseTag: string;
    likes: number;
    rating: number;
}



// Card component. This actually has course discussions and is the entire purpose of this website.
export default function Card({ isLoggedIn, postAuthor, title, time, content,postTag, courseTag, likes, rating }: CardProps) {
    const [likedCount, setLikedCount] = useState(likes);
    const [likeToggle, setLikeToggle] = useState(false);

  
    return (
        <div className="bg-white p-4 rounded-[8px] shadow-md flex flex-col w-[500px] h-[700px]">
            {/* User who posted and the tags here*/}
            <div className="flex flex-row justify-between mb-2">
                <p className="text-[#664930] font-bold">Posted By @{postAuthor} ○ {time}</p>
                <div className="flex flex-col gap-4">
                    <Pill title={postTag} textColor="text-[#664930]" pillColor="bg-[#CEC4BA]" width="w-[120px]" height="h-[20px]" />
                    <Pill title={courseTag} textColor="text-[#664930]" pillColor="bg-[#CEC4BA]" width="w-[120px]" height="h-[20px]" />
                </div>

            </div>

            {/* Title of the post , the post itself, readmore, footer part*/}
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[30px] mt-4 font-bold text-[#1E1E1E]">{title}</h2>
                <p className="text-[#1E1E1E] mt-8 ml-8 mr-8 text-[14px] font-bold">{content}</p>
                <Link href="/" className="flex flex-row items-center gap-2 mt-[40%] ">
                    <div className="relative w-6 h-6">
                        <Image 
                            src="/icons/readMoreOne.svg"
                            alt="read more" 
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-[#A65D4E] hover:text-[#854638] font-bold text-[14px] whitespace-nowrap">Read More</span>
                </Link>

                {/*Footer part */}
                <div className="bg-[#CEC4BA] p-4 rounded-[8px] flex flex-row w-[470px] h-[80px] mt-[15%] items-center">
                    <div className="flex flex-col">
                        <div 
                        onClick={() => {
                            if (likeToggle) {
                                setLikedCount(prev => prev - 1);
                                setLikeToggle(false);
                            } else {
                                setLikedCount(prev => prev + 1);
                                setLikeToggle(true);
                            }
                        }} 
                        className="flex flex-col cursor-pointer hover:opacity-70 transition "
                        >

                            <div className="relative w-6 h-6">
                                <Image 
                                    src={likeToggle ? "/icons/likedBtn.svg" : "icons/likeBtn.svg"}
                                    alt="likes" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className={`font-bold ${likeToggle ? 'text-[#854638]' : 'text-black'}`}> {likedCount}
                            </span>
                        </div>
                        
                    </div>
                    <div className="ml-16">
                        <span className="text-black font-bold">Rating: {rating}</span>
                    </div>
                </div>
            </div>
  
        </div>
    )
}