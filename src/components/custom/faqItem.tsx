"use client"
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface FaqProps {
   question: string;
   answer: string;
}
export default function FaqItem(props: FaqProps) {
   const [showAnswer, setShowAnswer] = useState(false);
   return (
      <div 
         className={`flex flex-row w-full mx-auto justfiy-between border border-[#E15025] ${!showAnswer ? 'rounded-full' : 'md:rounded-[60px] rounded-3xl bg-[#962E7133] bg-opacity-10 backdrop-blur-sm'} items-center h-full xl:px-12 lg:px-8 lg:py-11 px-10 py-4 cursor-pointer`}
         onClick={() => setShowAnswer(!showAnswer)}
      >
         <div className="flex flex-col justify-start items-start flex-grow">
            <div className={`lg:text-2xl text-lg w-11/12 ${showAnswer ? 'mb-[20px]' : ''}`}>
               {props.question}
            </div>
            { showAnswer ? 
               <div className="text-gray-300 w-11/12 font-thin lg:text-lg text-md">
                  {props.answer}
               </div> : 
               <div></div>
            }
         </div>
         <button 
            className="rounded-full bg-[#F88B1A] md:p-2 p-1 text-xl" 
            onClick={() => setShowAnswer(!showAnswer)}
         >
            {
               showAnswer? 
                  <Icon icon="lucide:chevron-up" width={32}></Icon> : 
                  <Icon icon="lucide:chevron-down" width={32}></Icon>
            }
         </button>
         
      </div>
   )
}