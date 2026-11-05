'use client';

import Link from "next/link";
import NavBar from "../components/NavBar";
import NavButton from "../components/NavButton";
import React, { useState, SubmitEvent, ChangeEvent } from 'react';
import DropDown from "../components/DropDown";
import {tempPosts} from "../tempData/cards";

type CreateProps = {
  title: string;
  description: string;
  postTag: string;
  courseTag: string;
  rating: string;
};

/*
    This is the create page where users create a new post
*/
export default function CreatePage() {

    {/* State for handling form submission and validation */}
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    {/* Adding in the add item funcitonality requirement for deadline Interactive UI*/}
    const [formData, setFormData] = useState<CreateProps>({
        title: '',
        description: '',
        postTag: 'Course Discussion',
        courseTag: 'STEM',
        rating: "0"
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleTags = (name: string, val: string ) => {
        setFormData((prev) => ({
            ...prev,
            [name]: val,
        }))
    }

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSubmitting) return;
            setIsSubmitting(true);
            setError("");
            setSuccess("");

        try {
            const response = await fetch("/api/posts", { //  /api/posts is the route.ts file that handles the post request
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    postTag: formData.postTag,
                    courseTag: formData.courseTag,
                    rating: formData.rating,
                }),
            });

            if (!response.ok) {
                throw new Error(`Could not create post (${response.status}).`);
            }
            setSuccess("Demo: Post created successfully! (Note: This is a demo and the post is not actually saved to a database.)");

            // Clear the form only after the API shows success.
            setFormData({
                title: "",
                description: "",
                postTag: "Course Discussion",
                courseTag: "STEM",
                rating: "0",
            });

        } catch (error) {

            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <NavBar isLoggedIn={true} userName="Ghost100"/>

            <div className="min-h-screen w-full bg-[#F3EAD6] max-sm:pb-8">
                <h1 className="text-4xl font-bold text-center mt-[5%] text-[#664930] max-sm:text-3xl">Create Post</h1> {/*Need to shrrink text here.*/}

                
                <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto flex flex-col mt-[2%] text-2xl text-[#664930] px-4 max-sm:w-full max-sm:max-w-[340px] max-sm:mt-5 max-sm:text-base">

                    <label className="grow mb-1" htmlFor="title">Title:</label>
                    <input 
                        className="bg-white border-10 rounded-xl border-white shadow-lg mb-5 max-sm:w-full max-sm:min-w-0 max-sm:h-11 max-sm:mb-4 max-sm:text-base"
                        name="title" 
                        type="text" 
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        />

                    <label className="grow mb-1" htmlFor="description">Description:</label>
                    <textarea 
                        className="bg-white border-10 rounded-xl border-white shadow-lg h-60 mb-5 max-sm:w-full max-sm:min-w-0 max-sm:h-36 max-sm:mb-4 max-sm:text-base max-sm:whitespace-pre-wrap max-sm:break-words"
                        name="description" 
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        />

                        {error && <p role="alert">{error}</p>} {/* Display error message if there is an error, will allwssay show 501 until api is connected */}
                        {success && <p role="status">{success}</p>} {/* Display success message if the post is created successfully, will always show 501 until api is connected */}

                    <label className="grow">Post Tag:</label>
                    <div className="flex max-sm:flex-wrap max-sm:gap-2 max-sm:mt-1 max-sm:mb-4" id="postTag">
                        <button onClick={() => handleTags('postTag', 'Course Discussion')} type="button" className={`NavButton whitespace-nowrap bg-[#5c4837] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] h-10
                        max-sm:!m-0 max-sm:!w-auto max-sm:max-w-full max-sm:!h-auto max-sm:min-h-9 max-sm:!px-3 max-sm:!py-2 max-sm:!text-sm max-sm:!leading-tight max-sm:!whitespace-normal max-sm:break-words
                                ${formData.postTag === 'Course Discussion' ? 'border-2 border-black' : ''}`}> 
                            Course Discussion
                        </button>
                        <button onClick={() => handleTags('postTag', 'Student Mini-Courses')} type="button" className={`NavButton whitespace-nowrap bg-[#667f83] text-white font-bold rounded-[15px] hover:bg-[#466064] active:bg-[#324f53] h-10
                        max-sm:!m-0 max-sm:!w-auto max-sm:max-w-full max-sm:!h-auto max-sm:min-h-9 max-sm:!px-3 max-sm:!py-2 max-sm:!text-sm max-sm:!leading-tight max-sm:!whitespace-normal max-sm:break-words
                        ${formData.postTag === 'Student Mini-Courses' ? 'border-2 border-black' : ''}`}>
                            Student Mini-Courses
                        </button>
                       
                    </div>

                    <label className="grow">Course Tag:</label>
                    <div className="flex max-sm:flex-wrap max-sm:gap-2 max-sm:mt-1 max-sm:mb-4" id="courseTag">
                        <button onClick={() => handleTags('courseTag', 'STEM')} type="button" className={`NavButton whitespace-pre-line bg-[#5c4837] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] h-10
                        max-sm:!m-0 max-sm:!w-auto max-sm:max-w-full max-sm:!h-auto max-sm:min-h-9 max-sm:!px-3 max-sm:!py-2 max-sm:!text-sm max-sm:!leading-tight max-sm:!whitespace-normal max-sm:break-words
                            
                        ${formData.courseTag === 'STEM' ? 'border-2 border-black' : ''}`}>
                            STEM
                        </button>
                        <button onClick={() => handleTags('courseTag', 'Business')} type="button" className={`NavButton whitespace-pre-line bg-[#667f83] text-white font-bold rounded-[15px] hover:bg-[#466064] active:bg-[#324f53] h-10
                        max-sm:!m-0 max-sm:!w-auto max-sm:max-w-full max-sm:!h-auto max-sm:min-h-9 max-sm:!px-3 max-sm:!py-2 max-sm:!text-sm max-sm:!leading-tight max-sm:!whitespace-normal max-sm:break-words
                                ${formData.courseTag === 'Business' ? 'border-2 border-black' : ''}`}>
                            Business
                        </button>
                        <button onClick={() => handleTags('courseTag', 'Humanities & Arts')} type="button" className={`NavButton whitespace-pre-line bg-[#ccaa93] text-white font-bold rounded-[15px] hover:bg-[#ad886e] active:bg-[#945951] h-10
                        max-sm:!m-0 max-sm:!w-auto max-sm:max-w-full max-sm:!h-auto max-sm:min-h-9 max-sm:!px-3 max-sm:!py-2 max-sm:!text-sm max-sm:!leading-tight max-sm:!whitespace-normal max-sm:break-words
                            ${formData.courseTag === 'Humanities & Arts' ? 'border-2 border-black' : ''}`}>
                            Humanities & Arts
                        </button>
                    </div>

                    <label className="grow">Rating:</label>
                    <div className="flex max-sm:mt-1" id="rating">
                            <DropDown dropOption="rating" onChange={(value) => handleTags('rating', value)}/> {/* Connected to the updated Dropdown component that now accepts an onChange prop */}
                    </div>

                    <div className="flex justify-center gap-20 mt-10 mb-10 max-sm:flex-wrap max-sm:gap-4 max-sm:mt-6 max-sm:mb-2">
                        <Link className="text-center" href="/discussion">
                            <button type="button" className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-30 h-10 max-sm:!m-0 max-sm:!text-base">
                                Cancel
                            </button>
                        </Link>
                        {/*<Link className="text-center" href="/discussion">*/}
                            <button type="submit" disabled={isSubmitting}  className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-30 h-10 max-sm:!m-0 max-sm:!text-base">
                                {isSubmitting ? "Creating..." : "Create Post"}
                            </button>
                        {/*</Link>*/}
                    </div>
                </form>

            </div>

        </>
    )
}