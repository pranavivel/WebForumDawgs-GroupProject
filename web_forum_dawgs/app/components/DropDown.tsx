'use client';

import {useState} from 'react'

export default function DropDown() {
    const [chosenOption, setChosenOption] = useState('All')

    return (
        <>
            <div className="flex flex-col gap-2">
                <select value={chosenOption} onChange={(e) => setChosenOption(e.target.value)}
                    className="bg-[#997E67] text-[#FFFFFF] px-4 py-2 rounded-[8px] font-bold outline-none focus:outline-[#664930] shadow-sm cursor-pointer"
                >
                    <option value="all">All</option>
                    <option value="discussion">Course Discussion</option>
                    <option value="mini">Student Mini-Course</option>
                    <option value="resource">Resources</option>
                </select>
            </div>
        </>
    )
}