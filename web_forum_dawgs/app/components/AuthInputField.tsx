'use client';

import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
// Props
type InputProps = {
  type: string;
  inputLabel: string;
  showPassword?: boolean;
};

/* Component for any log in input fields. It has the show password thing.*/
export default function AuthInputField({ type, inputLabel, showPassword }: InputProps) {
    const [value, setValue] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    // Find input type of this component based on if show password and it is type password. Basically it changes between type text and password
    const inputType = showPassword && isPasswordShown ? 'text' : type;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div className="flex flex-col gap-4 w-[375px]">
                <div className="flex justify-between items-center h-[24px]">
                    <label className="text-[#664930] font-bold text-sm" htmlFor={inputLabel}>
                    {inputLabel}
                    </label>
                    {/* Show password button only if showPassword is true */}
                    {showPassword && (
                            <button className="flex items-center gap-1 text-xs font-bold text-[#A65D4E] hover:text-[#854638] transition-colors duration-200"
                                type="button"
                                onClick={() => setIsPasswordShown(!isPasswordShown)}
                            >
                                <Image
                                    src={
                                        isPasswordShown ? "/icons/eyeClose.svg" : "/icons/eyeOpen.svg"
                                    }
                                    alt="Password Visibility"
                                    width={18}
                                    height={18}
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                                <span>{isPasswordShown ? "Hide" : "Show"}</span>
                            </button>
                        )}
                </div>
               {/*Input field */}
                <div className="flex flex-row items-center border-2 border-[#664930] rounded-[20px] w-[375px] h-[76px] px-2 py-1 bg-[#CCBEB1]">
                    <input
                        type={inputType}
                        id={inputLabel}
                        value={value}
                        onChange={handleChange}
                        placeholder=''
                        className="w-full bg-transparent outline-none text-[#664930]"
                    />
                </div>
                
            </div>
        </>
    )
}