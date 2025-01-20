"use client";
import React from "react";
import Image from "next/image";
import EnterButton from "../custom/enterbutton";
import HeaderItem from "../custom/headerItem";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
   const [showDrop, setShowDrop] = React.useState(false);

   return (
      <header className="bg-transparent text-white fixed top-0 left-0 w-full 2xl:px-[120px] xl:px-[60px] lg:px-[30px] px-[20px] py-[32px] z-20 font-[family-name:var(--font-man-rope)] backdrop-blur-xl">
         <div className="hidden xl:flex justify-between items-center">
            <div className="flex items-center space-x-2">
               <Image
                  src="/assets/robot.png"
                  alt="Tailwind CSS"
                  width={48}
                  height={48}
               />
               <p className="font-bold lg:text-2xl text-xl">MEET ASTRO</p>
            </div>
            <div className="flex items-center 2xl:space-x-[70px] xl:space-x-[40px] justify-center">
               <HeaderItem title="About" />
               <HeaderItem title="Features" />
               <HeaderItem title="Roadmap" />
               <HeaderItem title="JoinUs" />
               <HeaderItem title="FAQs" />
            </div>
            <EnterButton />
         </div>
         <div className="flex xl:hidden justify-between items-center">
            <div className="flex items-center space-x-2">
               <Image
                  src="/assets/robot.png"
                  alt="Tailwind CSS"
                  width={48}
                  height={48}
               />
               <p className="font-bold text-lg">MeetAstro</p>
            </div>
            <div className="flex items-center space-x-2 justify-center">
               <EnterButton />
               <div className='xl:hidden block cursor-pointer hover:opacity-70'>
                  <Icon onClick={() => setShowDrop(!showDrop)} icon="ic:round-list" className='text-white text-4xl' />
               </div>
            </div>
            {
               showDrop &&
               <div className='absolute flex flex-col top-full mt-[-20px] right-0 px-10 py-5 xl:!hidden gap-3 justify-center items-center bg-[#0c111e]'>
                  <HeaderItem title="About" />
                  <HeaderItem title="Features" />
                  <HeaderItem title="Roadmap" />
                  <HeaderItem title="JoinUs" />
                  <HeaderItem title="FAQs" />
               </div>
            }
         </div>
      </header>
   );
}