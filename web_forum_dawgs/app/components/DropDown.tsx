'use client';

import {useState} from 'react'

type DropDownProps = {
    dropOption: string;
}

export default function DropDown({dropOption} : DropDownProps) {
    const [chosenOption, setChosenOption] = useState('Please Select');
    const [isOpen,setIsOpen] = useState(false);

    // options for dropdown menu, value is what is stored in state, label is what is displayed to user
    const optionsPostType = [
        { value: 'all', label: 'All' },
        { value: 'discussion', label: 'Course Discussion' },
        { value: 'mini', label: 'Student Mini-Courses' },
        { value: 'resource', label: 'Resources' },
    ];

    const optionsFormRating = [
        { value: 'one', label: '1' },
        { value: 'two', label: '2' },
        { value: 'three', label: '3' },
        { value: 'four', label: '4' },
        { value: 'five', label: '5' },
    ];


    const currOption = dropOption === "rating" ? optionsFormRating : optionsPostType

    return ( 
            <div className="relative w-56">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="w-full bg-[#997E67] text-white px-4 py-2 rounded-[8px] font-bold text-left cursor-pointer"
                >
                    {chosenOption}
                </button>

            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-[#997E67] rounded-[8px] shadow-lg z-10">
                    {currOption.map((option) => (
                        <button
                        type="button"
                        key={option.value}
                        onClick={() => {
                            setChosenOption(option.label);
                            setIsOpen(false);
                        }}
                        className="w-full text-white px-4 py-2 text-left cursor-pointer hover:bg-[#664930]"
                    >
                        {option.label}
                    </button>
                ))}
                </div>
            )}

            </div> 

);
} 
