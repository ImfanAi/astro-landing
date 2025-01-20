/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import Image from "next/image";

type ITEM = { 
   title: string,
   description: string,
   status: string,
}

const roadMapTitle: string[] = [
   "Foundation",
   "Development and Deployment",
   "Expansion",
   "Ecosystem Growth"
]

const roadMapCompleted: string[] = [
   "completed",
   "ongoing",
   "planned",
   "planned",
]

const _roadmaps: ITEM[][] = [
   [
      { 
         title: 'Research and development in AI, DeFi, and Gaming.',
         description: '',
         status: "completed",
      }, 
      {
         title: 'Finalize the concept for MeetAstro.',
         description: '',
         status: "completed",
      }, 
      {
         title: 'Initiate development of the MeetAstro MVP app.',
         description: '',
         status: "completed",
      },
      {
         title: 'Launch social media presence.',
         description: '',
         status: "completed",
      }
   ],
   [
      {
         title: 'Launch the official website.',
         description: '',
         status: "ongoing",
      },
      {
         title: 'Conduct quality assurance and security audits.',
         description: '',
         status: "ongoing",
      },
      {
         title: 'Deploy the MVP app, featuring Swap ATM, yield generator, and missions.',
         description: '',
         status: "ongoing",
      },
      {
         title: 'Kickstart marketing efforts.',
         description: '',
         status: "ongoing",
      },
   ],
   [
      {
         title: 'Introduce additional pre-planned features.',
         description: '',
         status: "planned",
      },
      {
         title: 'Launch the MeetAstro Marketplace.',
         description: '',
         status: "planned",
      },
      {
         title: 'Partnership announcements',
         description: '',
         status: "planned",
      },
      {
         title: 'Execute the Token Generation Event (TGE).',
         description: '',
         status: "planned",
      },
      {
         title: 'Secure listings on decentralized exchanges (DEX).',
         description: '',
         status: "planned",
      },
   ],
   [
      {
         title: 'Achieve listings on centralized exchanges (CEX).',
         description: '',
         status: "planned",
      },
      {
         title: 'Launch the fully immersive Astro Universe game.',
         description: '',
         status: "planned",
      },
      {
         title: 'Open the MeetAstro merchandise store.',
         description: '',
         status: "planned",
      },
      {
         title: 'Debut the MeetAstro animation series.',
         description: '',
         status: "planned",
      },
   ],
]

export default function Roadmap() {

   const _renderItem = (_items: ITEM[], index: number) => (
      <div key={'item' + index} className={`flex ${index % 2 === 0 && 'xl:!flex-row-reverse'} relative w-5/6 flex-row-reverse xl:flex-row justify-center text-start gap-2 text-white xl:-mt-20 z-3`}>
         <div className='w1300:w-[35%] xl:w-[45%]  w-full rounded-3xl p-[1px] my-2 md:my-0'>
            <div className={`w-full h-full p-10 rounded-3xl border-2 border-[#F88B1A] bg-[#962E711A] bg-opacity-5 backdrop-blur-md gap-y-12 ` }>
               <h2 className={`md:text-xl lg:text-2xl font-bold text-[#F88B1A] font-[family-name:var(--font-monterial-bold)]`}>Phase {index}: {roadMapTitle[index - 1]}</h2>
               {
                  _items.map((_item: ITEM) => (
                     <div key={index + '_' + _item.title} className={`lg:text-lg md:text-sm mt-5`}>
                        <h3>{_item.title}</h3>
                        {_item.description}
                     </div>
                  ))
               }
            </div>
         </div>
         <div className={`flex items-center px-8 justify-center relative flex-none xl:py-10`}>
            <div className="bg-gradient-to-r from-[#962E71] via-[#E15025] to-[#F88B1A] h-full w-[2px] translate-x-1/2 z-0"></div>
            <div className="absolute w-[24px] h-[24px] flex-none z-10 rounded-full bg-gradient-to-r from-[#962E71] via-[#E15025] to-[#F88B1A]">
               <div className="absolute inset-1 bg-white rounded-full"></div>
            </div>
         </div>
         <div className='w1300:w-[35%] xl:w-[45%] w-full xl:block hidden'></div>
      </div>
   )


   return (
      <section
         id="Roadmap"
      >
         <div className="w-full h-full mx-auto justify-center items-center text-center relative flex flex-col 2xl:py-48 xl:py-36 lg:py-24 md:py-12 py-8">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/assets/main.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#151615] to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#151615] to-transparent"></div>
            <div className="absolute inset-0 bg-[#151615] opacity-20 backdrop-blur-sm"></div>
            <div
               style={{
                  background: "radial-gradient(circle at 0% 60%, #E15025 0%, transparent 80%)", /* Adjust the blur value as needed */
                  opacity: "20%",
                  width: "100%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 40% 100%, #F88B1A1A 0%, transparent 80%)", /* Adjust the blur value as needed */
                  opacity: "70%",
                  width: "100%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 80% 100%, #962E7133 0%, transparent 80%)", /* Adjust the blur value as needed */
                  opacity: "90%",
                  width: "100%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  top: 0,
                  left: 0,
               }} 
            />
            <div className="relative xl:mb-36 mb-0 z-2">
               <div className="relative bg-gradient-to-r from-[#962E71] via-[#E15025] to-[#F88B1A] bg-clip-text text-transparent md:text-9xl text-8xl font-extra-bold font-[family-name:var(--font-quinn-bold)] mb-[64px]">
                  Our Roadmap
                  <div className="relative">
                     <Image
                        src="/assets/roadmap.png"
                        alt="Astronaut standing on moon"
                        width={150}
                        height={150}
                        layout="responsive"
                        className="absolute w-full max-w-[80px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[140px] 2xl:max-w-[160px] 2xl:-right-32 2xl:bottom-5 xl:-right-28 xl:bottom-5 lg:-right-20 lg:bottom-5 md:-right-8 md:bottom-6 right-0 bottom-4" 
                     />
                  </div>
               </div>
            </div>
            {
               _roadmaps.map((_item: ITEM[], index: number) => _renderItem (_item, index + 1))
            }
         </div>
      </section>
   );
};

