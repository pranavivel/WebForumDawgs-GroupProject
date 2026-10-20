'use client';

import Link from "next/link";
import NavBar from "../components/NavBar";
import NavButton from "../components/NavButton";
import React, { useState, SubmitEvent, ChangeEvent } from 'react';

type CreateProps = {
  title: string;
  description: string;
  postTag: string;
  courseTag: string;
  rating: number;
};

/*
    This is the create page where users create a new post
*/
export default function Create() {
    {/* Adding in the add item funcitonality requirement for deadline Interactive UI*/}
    const [formData, setFormData] = useState<CreateProps>({
        title: '',
        description: '',
        postTag: 'Course Discussion',
        courseTag: 'STEM',
        rating: 0
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

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({
            title: '',
            description: '',
            postTag: 'Course Discussion',
            courseTag: 'STEM',
            rating: 0
        })
        console.log('Submitted:', formData);
    };



    return (
        <>
            <NavBar isLoggedIn={true} userName="temp"/>

            <div className="min-h-screen w-full bg-[#F3EAD6] ">
                <h1 className="text-4xl font-bold text-center mt-[5%] text-[#664930]">Create Post</h1>

                
                <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto flex flex-col mt-[2%] text-2xl text-[#664930] px-4">

                    <label className="grow mb-1" htmlFor="title">Title:</label>
                    <input 
                        className="bg-white border-10 rounded-xl border-white shadow-lg mb-5" 
                        name="title" 
                        type="text" 
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        />

                    <label className="grow mb-1" htmlFor="description">Description:</label>
                    <textarea 
                        className="bg-white border-10 rounded-xl border-white shadow-lg h-60 mb-5" 
                        name="description" 
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        />

                    <label className="grow">Post Tag:</label>
                    <div className="flex" id="postTagSelect">
                        <button onClick={() => handleTags('postTag', 'Course Discussion')} type="button" className={`NavButton whitespace-nowrap bg-[#5c4837] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] h-10
                        ${formData.postTag === 'Course Discussion' ? 'border-2 border-black' : ''}`}> 
                            Course Discussion
                        </button>
                        <button onClick={() => handleTags('postTag', 'Student Mini-Courses')} type="button" className={`NavButton whitespace-nowrap bg-[#667f83] text-white font-bold rounded-[15px] hover:bg-[#466064] active:bg-[#324f53] h-10
                        ${formData.postTag === 'Student Mini-Courses' ? 'border-2 border-black' : ''}`}>
                            Student Mini-Courses
                        </button>
                        <button onClick={() => handleTags('postTag', 'Resources')} type="button" className={`NavButton whitespace-pre-line bg-[#ccaa93] text-white font-bold rounded-[15px] hover:bg-[#ad886e] active:bg-[#945951] h-10
                         ${formData.postTag === 'Resources' ? 'border-2 border-black' : ''}`}>
                            Resources
                        </button>
                    </div>

                    <label className="grow">Course Tag:</label>
                    <div className="flex" id="postTagSelect">
                        <button onClick={() => handleTags('courseTag', 'STEM')} type="button" className={`NavButton whitespace-pre-line bg-[#5c4837] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] h-10
                        ${formData.courseTag === 'STEM' ? 'border-2 border-black' : ''}`}>
                            STEM
                        </button>
                        <button onClick={() => handleTags('courseTag', 'Business')} type="button" className={`NavButton whitespace-pre-line bg-[#667f83] text-white font-bold rounded-[15px] hover:bg-[#466064] active:bg-[#324f53] h-10
                        ${formData.courseTag === 'Business' ? 'border-2 border-black' : ''}`}>
                            Business
                        </button>
                        <button onClick={() => handleTags('courseTag', 'Humanities & Arts')} type="button" className={`NavButton whitespace-pre-line bg-[#ccaa93] text-white font-bold rounded-[15px] hover:bg-[#ad886e] active:bg-[#945951] h-10
                        ${formData.courseTag === 'Humanities & Arts' ? 'border-2 border-black' : ''}`}>
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
                            <button type="submit" className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626] w-30 h-10">
                                Submit
                            </button>
                        </Link>
                    </div>
                </form>

            </div>

        </>
    )
}