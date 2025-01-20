/* eslint-disable @next/next/no-img-element */
import React from "react";
import FaqItem from "../custom/faqItem";
import Image from "next/image";

type FAQ = {
  title: string,
  description: string
}

const faqs: FAQ[] = [
   {
      title: 'What is MeetAstro and how does it work?',
      description: 'MeetAstro is a gamified platform that integrates AI, decentralized finance (DeFi), and entertainment. Users interact with "Astro," your AI-powered companion that guides you through DeFi tools and experiences in a gamified way.'
   },
   {
      title: 'How does revenue sharing work?',
      description: 'MeetAstro redistributes platform earnings to active users through participation rewards. A portion of the revenue is pooled and distributed once certain thresholds are met.'
   },
   {
      title: 'What kind of missions can Astro undertake?',
      description: 'Astro can embark on missions which earn yield tokens, XP, and other rewards. Players can speed up missions by spending in-game gems.'
   },
   {
      title: 'How do social media and referrals contribute to rewards?',
      description: 'Users earn in-game currency by interacting with social media posts and referring others. The platform tracks interactions, and referrals yield bonuses based on user activity.'
   },
   {
      title: 'What is the long-term vision for MeetAstro?',
      description: 'MeetAstro plans to expand mission types, and enhance DeFi integration. Future updates will include more gamified elements, game modes, more defi features to increase user engagement and revenue distribution.'
   },
   
]

export default function Faq() {

   return (
      <section id="FAQs">
         <div className="relative align-top flex flex-col justify-center items-center w-full mx-auto md:px-10 2xl:py-32 xl:py-28 lg:py-20 py-12 font-[family-name:var(--font-monterial)]">
            <div
               style={{
                  background: "radial-gradient(circle at 0% 70%, #2D1058 0%, transparent 40%)", /* Adjust the blur value as needed */
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
                  background: "radial-gradient(circle at 70% 0%, #962E71 0%, transparent 40%)", /* Adjust the blur value as needed */
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
                  background: "radial-gradient(circle at 70% 100%, #962E71 0%, transparent 40%)", /* Adjust the blur value as needed */
                  opacity: "20%",
                  width: "100%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  top: 0,
                  left: 0,
               }} 
            />
            <p className="bg-gradient-to-r from-[#962E71] via-[#E15025] to-[#F88B1A] bg-clip-text text-transparent md:text-9xl text-8xl font-extra-bold font-[family-name:var(--font-quinn-bold)] mb-[64px]">FAQ</p>
            <div className="relative flex flex-col xl:w-4/5 md:w-full w-5/6 mx-auto gap-8">
               <div className="relative z-2">
                  <Image
                     src="/assets/faq.gif"
                     alt="Astro"
                     width={150}
                     height={150}
                     layout="responsive"
                     className="absolute w-full max-w-[80px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[140px] 2xl:max-w-[160px] 2xl:left-12 2xl:-top-52 xl:left-8 xl:-top-44 lg:-top-28 lg:left-8 left-4 -top-20" 
                  />
               </div>
               {
                  faqs.map((_faq: FAQ) => <FaqItem key={_faq.title} question={_faq.title} answer={_faq.description}/>)
               }
            </div>
         </div>
      </section>
   );
};
