'use client';

import Pill from "./Pill";
import Image from "next/image";
import Link from "next/link";

import {useState} from 'react';

type CardProps = {
    isLoggedIn: boolean;
    isMyPost?: boolean;

    postAuthor: string;
    title: string;
    time: string;
    content: string;
    postTag: string;
    courseTag: string;
    likes: number;
    rating: string;
}

// A function to loop through the rating prop to add stars dynamically
const starAdder = (r: string) => {
    const convertedR = Number(r)
    let stars = []
    for (let i = 0; i < convertedR; i++) {
         stars.push(
        <div
                key={i}
                className="relative w-6 h-6 max-sm:w-4 max-sm:h-4 max-sm:shrink-0"
            >
           
            <Image 
                src="/icons/rating.svg"
                alt={`rating${i}`}
                fill
                className="object-contain"
            />
        
        </div>
         )
    }
    return stars;
}


// Card component. This actually has course discussions and is the entire purpose of this website.
export default function Card({ isLoggedIn, isMyPost, postAuthor, title, time, content,postTag, courseTag, likes, rating }: CardProps) {
    const [likedCount, setLikedCount] = useState(likes);
    const [likeToggle, setLikeToggle] = useState(false);

  
    return (
        <div className="bg-white p-3 rounded-[8px] shadow-md flex flex-col justify-between w-full max-w-[470px] h-[600px] max-sm:max-w-[300px] max-sm:min-w-0 max-sm:h-auto max-sm:min-h-[440px]">
            {/* User who posted and the tags here*/}
            <div className="flex flex-row justify-between mb-2 max-sm:gap-2">
                <p className="text-[#664930] text-[8px] font-bold max-sm:min-w-0 max-sm:break-words">Posted By @{postAuthor} ○ {time}</p>
                <div className="flex flex-col gap-4 max-sm:gap-2 max-sm:shrink-0">
                    <Pill title={postTag} textColor="text-[#664930]" pillColor="bg-[#CEC4BA]" width="w-[120px]" height="h-[20px]" textSize="text-[9px]" />
                    <Pill title={courseTag} textColor="text-[#664930]" pillColor="bg-[#CEC4BA]" width="w-[120px]" height="h-[20px]" textSize="text-[9px]" />
                </div>

            </div>

            {/* Title of the post , the post itself, readmore, footer part*/}
            <div className="flex flex-col flex-grow justify-center items-center max-sm:text-[24px] max-sm:mt-3 max-sm:max-w-full max-sm:break-words">
                <h2 className="text-[30px] mt-6 font-bold text-center text-[#1E1E1E]">{title}</h2>
                <p className="text-[#1E1E1E] mt-8 ml-8 mr-8 text-[14px] font-bold max-sm:mt-4 max-sm:ml-2 max-sm:mr-2 max-sm:self-stretch max-sm:break-words">{content}</p>
                {/* Checking if logged in or not. this is where the card component has differences between both versions*/}
                {isLoggedIn ? (
                    <Link href="/" className="flex flex-row items-center gap-2 mt-auto mb-20 max-sm:mb-6 max-sm:pt-4">
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
                ) : 
                (

                    <Link href="/signin" className="flex flex-row items-center gap-2 mt-auto mb-20 max-sm:mb-6 max-sm:pt-4">
                        <div className="relative w-6 h-6">
                            <Image 
                                src="/icons/readMoreOne.svg"
                                alt="read more" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[#A65D4E] hover:text-[#854638] font-bold text-[14px] whitespace-nowrap">Sign In to Read More</span>
                    </Link>
                )}


                {/*Footer part */}
                <div className="bg-[#CEC4BA] p-4 rounded-[8px] flex flex-row w-full h-[70px] items-center justify-between px-6 max-sm:px-2 max-sm:py-2">
                    { isLoggedIn ? (
                        <div className="bg-[#CEC4BA] p-4 rounded-[8px] flex flex-row w-full h-[70px] items-center justify-between px-6 max-sm:px-0 max-sm:py-0 max-sm:gap-2">
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
                                        src={likeToggle ? "/icons/likedBtn.svg" : "/icons/likeBtn.svg"}
                                        alt="likes" 
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                    <span className={`font-bold ${likeToggle ? 'text-[#854638]' : 'text-black'}`}> {likedCount}
                                    </span>
                                </div>
                            </div>

                            {/*Rating Section in footer when logged in*/}
                            <div className="flex flex-row items-center gap-1 max-sm:flex-wrap max-sm:justify-end">
                                <div className="ml-4 max-sm:ml-1">
                                    <span className="text-black font-bold max-sm:text-[12px]">Rating: </span>
                                </div>
                                <div className="flex flex-row gap-1">
                                    {starAdder(rating)}
                                </div>
                            </div>
                        </div>
                        ) : (
                            // Rating Section in footer wwhen not looged in
                            <div className="flex flex-row items-center gap-1 max-sm:flex-wrap">
                                <div className="ml-6 max-sm:ml-1">
                                    <span className="text-black font-bold max-sm:text-[12px]">Rating: </span>
                                </div>
                                <div className="flex flex-row gap-1">
                                    {starAdder(rating)}
                                </div>
                            </div>
                     ) }
                    

                   
                </div>
                {/*Icon part for remove delete*/}
                {isMyPost  ? (
                            <div className="flex flex-row self-end w-fit gap-4 mt-[16px]">
                                <div className=" relative w-6 h-6 " >
                                    <Image 
                                        src={"/icons/editCard.svg"}
                                        alt="likes" 
                                        fill
                                        className="object-contain "
                                    />
                                </div>
                                <div className=" relative w-6 h-6 ">
                                     <Image 
                                        src={"/icons/deleteCard.svg"}
                                        alt="likes" 
                                        fill
                                        className="object-contain "
                                    />
                                </div>
                                   
                            </div>
                            
                            
                        ) :('')}
            </div>
        </div>
    )
}