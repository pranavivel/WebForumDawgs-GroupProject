'use client';

import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
// Props
type InputProps = {
  setFunction: (e: string) => void;
  type: string;
  inputLabel: string;
  showPassword?: boolean;
};

/* Component for any log in input fields. It has the show password thing.*/
export default function AuthInputField({ setFunction, type, inputLabel, showPassword }: InputProps) {
    const [value, setValue] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    // Find input type of this component based on if show password and it is type password. Basically it changes between type text and password
    const inputType = showPassword && isPasswordShown ? 'text' : type;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setFunction(e.target.value);
    };

    return (
        <>
            <div className="mx-auto flex w-full max-w-[300px] flex-col gap-[10px] sm:mx-0 sm:max-w-[375px] sm:gap-4">
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
                <div className="flex h-[52px] w-full flex-row items-center rounded-[20px] border-2 border-[#664930] bg-[#CCBEB1] px-2 py-1 sm:h-[76px] sm:w-[300px]">
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